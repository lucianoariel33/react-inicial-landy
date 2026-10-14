import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// También el título, el idioma y la descripción del HTML salen del JSON.
function pageContent() {
  return {
    name: "page-content",
    transformIndexHtml(html) {
      const { meta } = JSON.parse(
        readFileSync(new URL("./src/content/site.json", import.meta.url), "utf8"),
      );
      const values = {
        LANGUAGE: meta.language,
        ICON: meta.icon,
        DESCRIPTION: meta.description,
        TITLE: meta.title,
        NOSCRIPT: meta.noscript,
      };
      return html.replace(/%SITE_(\w+)%/g, (_, key) =>
        values[key].replace(/[&<>"']/g, (character) =>
          ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character],
        ),
      );
    },
  };
}

export default defineConfig({ plugins: [react(), pageContent()] });
