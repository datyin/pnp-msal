import defineConfig from "@antfu/eslint-config";

export default defineConfig({
  typescript: true,
  stylistic: {
    semi: true,
    quotes: "double",
  },
  formatters: {
    css: "prettier",
    html: "prettier",
    markdown: "prettier",
  },
  rules: {
    curly: ["error", "multi-line"],
  },
});
