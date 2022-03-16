import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { navbar } from "./configs";
import sidebar from "./sidebar";
export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-US",
  title: "Lawted's blog",
  description: "Welecome To My World",
  plugins: [
    ["vuepress-plugin-auto-sidebar"],
    ["@vuepress/plugin-search"],
    ["vuepress-plugin-mermaidjs"],
    ["@renovamen/vuepress-plugin-mermaid"]

  ],
  theme: "@vuepress/theme-default",
  themeConfig: {
    // logo: "/images/logo.png",
    navbar: navbar.NavBarConfig,
    sidebar: sidebar,
    repo: "https://github.com/LAWTED/PFI",
    docsBranch: "main",
    docsDir: "docs",
  },
});
