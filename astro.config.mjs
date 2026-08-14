import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://buildthedreamconstructions.com.au',
  build: { inlineStylesheets: 'auto' },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
