import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://from-mozart-to-javascript.dev/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
