import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

// Array of extensions to be handled by babel
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// Excluded dependencies - dev dependencies
const EXTERNAL = pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [];

export default {
    input: ['./src/index.ts'], // What files we build?
    output: [
        {
            file: pkg.module,
            sourcemap: true, // We want a source map to trace the original code
            format: 'esm', // Built files will follow ES Module format,
            plugins: [terser()],
        },
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
            plugins: [terser()],
        },
    ],
    plugins: [
        peerDepsExternal(), // https://rollupjs.org/guide/en/#peer-dependencies
        resolve({
            mainFields: ['module', 'main', 'jsnext:main', 'browser'],
            extensions,
        }),
        commonjs(),
        babel({
            extensions, // Compile our TypeScript files
            babelHelpers: 'inline', // Place babel helper functions in the same file they were used
            include: extensions.map((ext) => `src/**/*${ext}`),
        }),
    ],
    external: EXTERNAL, // https://rollupjs.org/guide/en/#peer-dependencies
};
