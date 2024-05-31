import antfu from '@antfu/eslint-config';

export default antfu(
  {
    rules: {
      'style/semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
    overrides: [
      {
        files: ['tests/**/*'],
        env: {
          jest: true,
        },
      },
    ],
  },
);
