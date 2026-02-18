import globals from "globals";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePlugins: (pluginName) => {
    if (pluginName === "react") return eslintPluginReact;
    if (pluginName === "react-hooks") return eslintPluginReactHooks;
    if (pluginName === "@typescript-eslint") return typescriptEslintPlugin;
    return null;
  },
});

export default [
  // Global ignores
  {
    ignores: [
      "dist/",
      "node_modules/",
      "*.config.js", // Ignore top-level JS config files for primary TS linting
      "postcss.config.js",
      "tailwind.config.js",
      "vite.config.ts"
    ],
  },
  // Base configuration for all files
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "linebreak-style": ["error", "windows"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
    },
  },
  // Configuration for TypeScript files
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      
      // Custom overrides
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    },
  },
  // Configuration for top-level JavaScript config files (without parserOptions.project)
  // This helps prevent "Parsing error: parserOptions.project" for JS files
  {
    files: ["*.js", "*.cjs"], // For eslint.config.js, postcss.config.js, tailwind.config.js etc.
    languageOptions: {
      parser: typescriptEslintParser, // Still use TS parser for better JS linting
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Add specific rules for JS config files if needed
    },
  },
  // Vite config is a ts file but might need specific linting without project option sometimes
  {
    files: ["vite.config.ts"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        // Do NOT include parserOptions.project here if it causes issues
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Specific rules for vite.config.ts if needed
    }
  }
];