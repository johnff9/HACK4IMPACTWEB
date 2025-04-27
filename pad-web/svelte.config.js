import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      // Add your repository name here if you're deploying to a project site
      // (e.g., if your repo is 'my-username.github.io/my-repo')
      // base: process.env.NODE_ENV === 'production' ? '/my-repo' : '',
      
      // For user/organization sites (my-username.github.io), leave base empty
      base: process.env.NODE_ENV === 'production' ? '' : '',
    },
    // allow up to 150kb of style to be inlined with the HTML
    inlineStyleThreshold: 150000,
    // If you're using a custom domain, you might need this:
    // trailingSlash: 'always'
  },
  preprocess: vitePreprocess()
};

export default config;