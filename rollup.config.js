import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/components/index.ts", // O arquivo de entrada da sua lib
    output: [
        {
            file: "dist/index.cjs.js", // Output para CommonJS
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.esm.js", // Output para ESModules
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        resolve({
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        terser(), // Opcional: minimiza o bundle
    ],
    external: ["react", "react-dom"], // Exclui as dependências do React do bundle
};
