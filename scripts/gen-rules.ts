import { Linter } from 'eslint';
import * as util from 'util';
import { exec } from 'child_process';
import { createWriteStream } from 'fs';
const execP = util.promisify(exec);

interface EslintRules {
    [rule: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions;
}

interface DocGenConfig {
    title: string;
    eslintPath: string;
    mdPath: string;
}

const DOC_OUT_DIR = 'docs';

const eslintGenConfigs: DocGenConfig[] = [
    {
        title: '@bsokol/eslint-config/react-typescript',
        eslintPath: './react-typescript.js',
        mdPath: `./${DOC_OUT_DIR}/react-typescript.md`,
    },
    {
        title: '@bsokol/eslint-config/node-typescript',
        eslintPath: './node-typescript.js',
        mdPath: `./${DOC_OUT_DIR}/node-typescript.md`,
    },
    {
        title: '@bsokol/eslint-config/react-native-typescript',
        eslintPath: './react-native-typescript.js',
        mdPath: `./${DOC_OUT_DIR}/react-native-typescript.md`,
    },
    {
        title: '@bsokol/eslint-config/jest',
        eslintPath: './jest.js',
        mdPath: `./${DOC_OUT_DIR}/jest.md`,
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
    const [prefix, ...baseRules] = rule.split('/');
    const baseRule = baseRules.join('/');

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

    if (prefix === 'compat') {
        return `[${rule}](https://github.com/amilajack/eslint-plugin-compat#readme)`;
    }

    if (prefix === 'node') {
        return `[${rule}](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/${baseRule}.md)`;
    }

    if (prefix === '@babel' || prefix === 'babel') {
        return `[${rule}](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin)`;
    }

    if (prefix === 'flowtype') {
        return `[${rule}](https://github.com/gajus/eslint-plugin-flowtype#${baseRule})`;
    }

    if (prefix === 'standard') {
        return `[${rule}](https://github.com/standard/eslint-config-standard)`;
    }

    if (prefix === 'unicorn') {
        return `[${rule}](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/${baseRule}.md)`;
    }

    if (prefix === 'vue') {
        return `[${rule}](https://eslint.vuejs.org/rules/${baseRule}.html)`;
    }

    if (!baseRule) {
        return `[${rule}](https://eslint.org/docs/rules/${prefix})`;
    }
    return rule;
}

async function writeRulesToMarkdown(config: DocGenConfig, rules: EslintRules): Promise<void> {
    const writeStream = createWriteStream(config.mdPath);
    writeStream.write(`## ${config.title}\n\n`);
    writeStream.write(`**Configured rules**\n\n`);
    writeStream.write('|Rule | Level | Additional Configs|\n');
    writeStream.write('|---|---|---|\n');
    Object.keys(rules)
        .sort()
        .forEach((ruleName: string): void => {
            let ruleLevel: string;
            let ruleConfig: string;

            if (Array.isArray(rules[ruleName])) {
                ruleLevel = rules[ruleName][0] as string;
                ruleConfig = (rules[ruleName] as Linter.RuleLevelAndOptions)
                    .filter((key, i) => i !== 0)
                    .map(
                        (options) =>
                            `<pre>${JSON.stringify(options, null, 2)
                                .replace(RegExp('\\n', 'g'), '<br>')
                                .replace(RegExp(' ', 'g'), '&nbsp;')}</pre>`
                    )
                    .join('<br>');
            } else {
                ruleLevel = rules[ruleName] as string;
                ruleConfig = '&#8291;';
            }
            writeStream.write(`|${linkify(ruleName)}|${formatLevel(ruleLevel)}|${ruleConfig}|\n`);
        });
    writeStream.end();
}

async function genRulesList(config: DocGenConfig): Promise<void> {
    const { stdout } = await execP(
        `./node_modules/.bin/eslint --config ${config.eslintPath} --print-config ${config.eslintPath}`
    );
    const { rules } = JSON.parse(stdout);
    await writeRulesToMarkdown(config, rules);
}

Promise.all(eslintGenConfigs.map((config): Promise<void> => genRulesList(config))).then((): void =>
    console.log('Rule Build Complete')
);
