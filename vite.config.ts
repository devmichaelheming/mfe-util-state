import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      include: ["src/stores/**", "src/hooks/**"],
    },
  },
});
