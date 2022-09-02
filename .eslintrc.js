module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'jest',
    'testing-library',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'next/core-web-vitals',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
          'object',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/lib/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/types/**',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@/styles/**',
            group: 'object',
            position: 'after',
          },
        ],
      },
    ],
    'jest/consistent-test-it': ['warn', { fn: 'it' }],
  },
};
