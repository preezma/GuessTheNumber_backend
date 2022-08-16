module.exports = {
    'env': {
        'es6': true,
        'node': true,
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        indent: [
            'error',
            2,
        ],
        'linebreak-style': 'off',
        'global-require': 0,
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'no-console': 'error',
        'max-len': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-plusplus': 'off',
        'no-use-before-define': 'off',
        'no-underscore-dangle': 'off',
        'func-names': 'off',
        'class-methods-use-this': 'off',
        'object-curly-newline': 'off',
        'no-case-declarations': 'warn',
        'no-param-reassign': 'warn',
        'consistent-return': 'off',
    },
};
