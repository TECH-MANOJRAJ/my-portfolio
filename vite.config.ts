import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Set base to "/repo-name/" if you deploy to GitHub Pages project URL.
export default defineConfig({ base: "/", plugins: [react(), tailwindcss()] });
