import adapter    from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';


const BASE_PATH  = process.env.BASE_PATH || "";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		methodOverride: { allowed: ['PATCH', 'DELETE']},
    paths: { base: BASE_PATH },
    prerender: { default: true },
	}
};

export default config;
