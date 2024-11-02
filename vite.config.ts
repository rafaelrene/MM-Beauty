import { defineConfig } from 'vitest/config';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		svg({
			includePaths: ['./src/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								removeViewBox: false
							}
						}
					},
					{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
				]
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
