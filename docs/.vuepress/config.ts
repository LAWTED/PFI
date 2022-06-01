const { defaultTheme } = require('@vuepress/theme-default')
import { navbar } from "./configs";
import sidebar from "./sidebar";
module.exports = {
  theme: defaultTheme({
    navbar: navbar.NavBarConfig,
    sidebar: sidebar,
    repo: "https://github.com/LAWTED/PFI",
    docsBranch: "main",
    docsDir: "docs",
  }),
  plugins: [
    ["vuepress-plugin-auto-sidebar"],
    ["@vuepress/plugin-search"],
    [
      "@renovamen/vuepress-plugin-mermaid",
      {
        theme: "default",
        darkTheme: "dark",
        darkSelector: "html",
        darkClass: "dark",
      },
    ],
  ],
  port: 1234,
}