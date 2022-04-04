module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'prettier',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
            },
        },
    },
    rules: {
        'no-unused-vars': 'warn',
        'import/no-named-as-default': 'off',
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],
        'no-restricted-globals': 'off',
        'no-underscore-dangle': 'off',
        'no-prototype-builtins': 'off',
        'no-nested-ternary': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        'import/no-cycle': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-param-reassign': 0,
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['off'],
    },
};
