module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['unused-imports', 'react-hooks', 'jsx-a11y'],
  rules: {
    'no-else-return': 2,
    'react/prop-types': 0,
    'react/jsx-no-target-blank': 0,
    'unused-imports/no-unused-imports-ts': 2,
    'unused-imports/no-unused-vars-ts': 0,
    'react-hooks/exhaustive-deps': 2,
    'react/display-name': 0,
    'no-unused-vars': 0,
    'no-console': 1,
  },
};
