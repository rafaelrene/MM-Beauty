import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['"Alef"', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: [typography()]
} as Config;
