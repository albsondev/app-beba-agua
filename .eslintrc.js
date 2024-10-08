module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'], // Prettier integrado
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': ['error'], // Para garantir que Prettier siga as regras de formatação
      },
    },
  ],
};
