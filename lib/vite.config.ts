import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      name: "PnpMSALBehavior",
      formats: ["es", "cjs", "umd"],
      entry: {
        index: "src/index.ts",
      },
    },
    rollupOptions: {
      external: [
        "@azure/msal-browser",
        "@pnp/core",
        "@pnp/queryable",
      ],
      output: {
        globals: {
          "@azure/msal-browser": "msal",
          "@pnp/core": "pnpcore",
          "@pnp/queryable": "pnpqueryable",
        },
      },
    },
  },
});
