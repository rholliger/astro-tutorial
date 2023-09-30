import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://vocal-bubblegum-5b5a48.netlify.app",
  integrations: [preact()]
});