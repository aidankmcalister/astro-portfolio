import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";
import svelte from "@astrojs/svelte";
import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  site: "https://aidanmcalister.com/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://aidanmcalister.com/sitemap-index.xml",
        "https://aidanmcalister.com/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({
      injectReset: true,
    }),
    icon(),
    svelte(),
    tunnel(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify(),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
