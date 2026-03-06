// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Flow",
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
        },
        // mn: {
        //   label: 'Монгол',
        // },
      },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/flow-mn/flow" }],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  base: "/docs",
  outDir: "../build/docs",
});
