import { defineConfig } from "rollup";
import del from "rollup-plugin-delete";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      format: "cjs",
      file: "./dist/index.js",
    },
    {
      format: "es",
      file: "./dist/index.es.js",
    },
    {
      format: "umd",
      name: "number2hans",
      file: "./dist/index.umd.js",
    },
  ],
  plugins: [
    typescript({
      declaration: true,
      declarationDir: "type",
      exclude: ["./src/test/**/*", "./rollup.config.ts"],
    }),
  ],
});
