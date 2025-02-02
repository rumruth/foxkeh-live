import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import preprocess from 'svelte-preprocess';

export default {
	input: 'index.js',
	output: {
		format: 'iife',
		file: 'foxkeh.js',
		compact: true,
    	sourcemap: false,
	},
	plugins: [
		svelte({ 
			emitCss: false,
      		preprocess: preprocess(),
		}),
		resolve({ browser: true, dedupe: ['svelte'] }),
		terser(),
	],
}
