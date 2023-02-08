module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    env: {
        es6: true,
        browser: false,
        node: true,
        jest: true
    },
    plugins: [
        'unused-imports',
        '@typescript-eslint/eslint-plugin',
        'simple-import-sort',
        'etc',
        'eslint-plugin-no-explicit-type-exports',
        'prettier'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier'
    ],
    rules: {
        'no-await-in-loop': 0,
        'func-names': 0,
        'arrow-body-style': 0,
        '@typescript-eslint/naming-convention': 0,
        'import/no-cycle': 2,
        'import/prefer-default-export': 0,
        'no-console': 0,
        'simple-import-sort/imports': 2,
        'simple-import-sort/exports': 2,
        'no-restricted-syntax': 0,
        'unused-imports/no-unused-imports-ts': 2,
        'unused-imports/no-unused-imports': 2,
        'no-underscore-dangle': 0,
        'no-extend-native': 0,
        'prettier/prettier': [2, {}, { usePrettierrc: true }],
        complexity: 0,
        'no-param-reassign': 0,
        'no-nested-ternary': 2,
        radix: 0,
        'no-restricted-globals': 0,
        'import/extensions': 0,
        yoda: 2,
        'no-explicit-type-exports/no-explicit-type-exports': 2,
        'etc/no-misused-generics': 2,
        'etc/no-t': 0,
        'etc/no-implicit-any-catch': 0,
        'no-negated-condition': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/array-type': 2,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/consistent-indexed-object-style': [2, 'record'],
        '@typescript-eslint/consistent-type-assertions': [
            2,
            { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }
        ],
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/consistent-type-imports': [2, { prefer: 'type-imports' }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/consistent-type-exports': [2],
        '@typescript-eslint/method-signature-style': [0, 'property'],
        '@typescript-eslint/no-confusing-non-null-assertion': 2,
        '@typescript-eslint/no-confusing-void-expression': 2,
        '@typescript-eslint/no-invalid-void-type': 2,
        '@typescript-eslint/no-meaningless-void-operator': 2,
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,
        '@typescript-eslint/no-require-imports': 2,
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
        '@typescript-eslint/no-unnecessary-condition': 2,
        '@typescript-eslint/no-unnecessary-qualifier': 2,
        '@typescript-eslint/no-unnecessary-type-arguments': 2,
        '@typescript-eslint/non-nullable-type-assertion-style': 2,
        '@typescript-eslint/prefer-for-of': 2,
        '@typescript-eslint/prefer-function-type': 0,
        '@typescript-eslint/prefer-includes': 2,
        '@typescript-eslint/prefer-nullish-coalescing': 2,
        '@typescript-eslint/prefer-optional-chain': 2,
        '@typescript-eslint/prefer-reduce-type-parameter': 2,
        '@typescript-eslint/prefer-regexp-exec': 2,
        '@typescript-eslint/prefer-string-starts-ends-with': 2,
        '@typescript-eslint/prefer-ts-expect-error': 2,
        '@typescript-eslint/promise-function-async': 2,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/switch-exhaustiveness-check': 2,
        '@typescript-eslint/type-annotation-spacing': 2,
        '@typescript-eslint/unified-signatures': 2,
        '@typescript-eslint/brace-style': 2,
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/comma-spacing': 2,
        '@typescript-eslint/default-param-last': 2,
        '@typescript-eslint/dot-notation': 2,
        '@typescript-eslint/func-call-spacing': 2,
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/init-declarations': 2,
        '@typescript-eslint/keyword-spacing': 2,
        '@typescript-eslint/lines-between-class-members': 0,
        '@typescript-eslint/no-array-constructor': 2,
        '@typescript-eslint/no-dupe-class-members': 2,
        '@typescript-eslint/no-duplicate-imports': 2,
        '@typescript-eslint/no-empty-function': 2,
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/no-extra-semi': 2,
        '@typescript-eslint/no-implied-eval': 2,
        '@typescript-eslint/no-invalid-this': 2,
        '@typescript-eslint/no-loop-func': 2,
        '@typescript-eslint/no-loss-of-precision': 2,
        '@typescript-eslint/no-magic-numbers': [0, { ignore: [0, 1, -1] }],
        '@typescript-eslint/no-redeclare': 2,
        '@typescript-eslint/no-restricted-imports': 2,
        '@typescript-eslint/no-shadow': 2,
        '@typescript-eslint/no-throw-literal': 2,
        '@typescript-eslint/no-unused-expressions': 2,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-unused-vars': [
            2,
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
        ],
        '@typescript-eslint/no-useless-constructor': 2,
        '@typescript-eslint/object-curly-spacing': 2,
        '@typescript-eslint/padding-line-between-statements': 2,
        '@typescript-eslint/quotes': 2,
        '@typescript-eslint/require-await': 2,
        '@typescript-eslint/return-await': 2,
        '@typescript-eslint/semi': 2,
        '@typescript-eslint/space-before-function-paren': 2,
        '@typescript-eslint/space-infix-ops': 2,
        'brace-style': 'off',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'default-param-last': 'off',
        'dot-notation': 'off',
        'func-call-spacing': 'off',
        indent: 'off',
        'init-declarations': 'off',
        'keyword-spacing': 'off',
        'lines-between-class-members': 'off',
        'no-array-constructor': 'off',
        'no-dupe-class-members': 'off',
        'no-duplicate-imports': 'off',
        'no-empty-function': 'off',
        'no-extra-parens': 'off',
        'no-extra-semi': 'off',
        'no-implied-eval': 'off',
        'no-invalid-this': 'off',
        'no-loop-func': 'off',
        'no-loss-of-precision': 'off',
        'no-magic-numbers': 'off',
        'no-redeclare': 'off',
        'no-restricted-imports': 'off',
        'no-shadow': 'off',
        'no-throw-literal': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'object-curly-spacing': 'off',
        'padding-line-between-statements': 'off',
        quotes: 'off',
        'require-await': 'off',
        'return-await': 'off',
        semi: 'off',
        'space-before-function-paren': 'off',
        'space-infix-ops': 'off'
    }
};
