import * as util from 'util';
import { exec } from 'child_process';
import { createWriteStream } from 'fs';
import * as YAML from 'json2yaml';
const execP = util.promisify(exec);

type EslintRule = string | [string, object];

interface EslintRules {
    [rule: string]: EslintRule;
}

interface EslintGenConfig {
    title: string;
    eslintPath: string;
    mdPath: string;
}

const eslintGenConfigs: EslintGenConfig[] = [
    {
        title: '@bsokol/eslint-config/react-typescript',
        eslintPath: './react-typescript.js',
        mdPath: './rules/react-typescript.md',
    },
    {
        title: '@bsokol/eslint-config/node-typescript',
        eslintPath: './node-typescript.js',
        mdPath: './rules/node-typescript.md',
    },
    {
        title: '@bsokol/eslint-config/react-native-typescript',
        eslintPath: './react-native-typescript.js',
        mdPath: './rules/react-native-typescript.md',
    },
];

function formatLevel(level: string): string {
    switch (String(level)) {
        case '0':
        case 'off':
            return 'Off';
        case '1':
        case 'warn':
            return 'Warn';
        case '2':
        case 'error':
            return 'Error';
        default:
            return String(level);
    }
}

function linkify(rule: string): string {
    const [prefix, baseRule] = rule.split('/');

    if (prefix === '@typescript-eslint') {
        return `[${rule}](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${baseRule}.md)`;
    }

    if (prefix === 'jest') {
        return `[${rule}](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/${baseRule}.md)`;
    }

    if (prefix === 'jsx-a11y') {
        return `[${rule}](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/${baseRule}.md)`;
    }

    if (prefix === 'react') {
        return `[${rule}](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${baseRule}.md)`;
    }

    if (prefix === 'react-native') {
        return `[${rule}](https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/${baseRule}.md)`;
    }

    if (prefix === 'react-hooks') {
        return `[${rule}](https://www.npmjs.com/package/eslint-plugin-react-hooks)`;
    }

    if (!baseRule) {
        return `[${rule}](https://eslint.org/docs/rules/${prefix})`;
    }
    return rule;
}

async function writeRulesToMarkdown(config: EslintGenConfig, rules: EslintRules): Promise<void> {
    const writeStream = createWriteStream(config.mdPath);
    writeStream.write(`## ${config.title}\n\n`);
    writeStream.write(`**Configured rules**\n\n`);
    writeStream.write('Rule | Level | Additional Config\n');
    writeStream.write('---|---|---\n');
    Object.keys(rules)
        .sort()
        .forEach((ruleName: string): void => {
            const ruleLevel: string = (Array.isArray(rules[ruleName])
                ? rules[ruleName][0]
                : rules[ruleName]) as string;
            const ruleConfig: string = Array.isArray(rules[ruleName])
                ? `<pre>${YAML.stringify(rules[ruleName][1]).replace(
                      RegExp('\\n', 'g'),
                      '<br>'
                  )}</pre>`
                : '-';
            writeStream.write(`${linkify(ruleName)}|${formatLevel(ruleLevel)}|${ruleConfig}\n`);
        });
    writeStream.end();
}

async function genRulesList(config: EslintGenConfig): Promise<void> {
    const { stdout } = await execP(
        `./node_modules/.bin/eslint --config ${config.eslintPath} --print-config ./base.js`
    );
    const { rules } = JSON.parse(stdout);
    await writeRulesToMarkdown(config, rules);
}

Promise.all(eslintGenConfigs.map((config): Promise<void> => genRulesList(config))).then((): void =>
    console.log('Rule Build Complete')
);
