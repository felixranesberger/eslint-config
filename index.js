process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {
    extends: '@antfu',
    rules: {
        // TODO: remove when this pull request is merged
        // https://github.com/antfu/eslint-config/pull/304/files
        'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
        'semi': ['error', 'always'],
        'semi-style': ['error', 'last'],
        '@typescript-eslint/semi': ['error', 'always'],
        'curly': ['error', 'multi-line'],
        'object-curly-spacing': ['error', 'always'],
        'object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        }],
        'antfu/if-newline': 'off',
    },
};
