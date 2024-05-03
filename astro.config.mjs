import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind(), mdx(), preact(), solidJs()]
});