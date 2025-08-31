import js from '@eslint/js'
import globals from "globals";
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  {
    files: ["eslint.config.mjs"],
    languageOptions: {
      sourceType: "module",
      globals: globals.node
    }
  },
  { 
    files: ["**/*.{js,cjs}"], 
    languageOptions: { 
      sourceType: "commonjs",
      globals: globals.node
    }, 
    
    plugins: { js, stylistic },
    extends: ["js/recommended"],

    rules: {
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'arrow-spacing': [
        'error', { 'before': true, 'after': true }
      ],
      'no-console': 0
    }
  },
  globalIgnores(['./dist'])
]);
