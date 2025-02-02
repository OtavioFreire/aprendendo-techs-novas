import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Estendendo as configurações do Next.js com TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Adicionando regras customizadas
  {
    rules: {
      // Adiciona a regra para restringir o uso de loops 'for'
      "no-restricted-syntax": [
        "error",
        "ForStatement", // Proíbe o uso de loops 'for'
      ],
      "no-console": [
          "error"
        ],
    },
  },
];

export default eslintConfig;
