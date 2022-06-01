const { defaultTheme } = require("@vuepress/theme-default");
const { mermaidPlugin } = require("@renovamen/vuepress-plugin-mermaid");
const { searchPlugin } = require('@vuepress/plugin-search')
const sidebarConf = require("./sidebar");
import sidebar from "./sidebar";
import { navbar } from "./configs";
module.exports = {
  locales: {
    "/": {
      title: "Lawted's Blog",
    },
  },
  theme: defaultTheme({
    navbar: navbar.NavBarConfig,
    sidebar: sidebar,
    repo: "https://github.com/LAWTED/PFI",
    docsBranch: "main",
    docsDir: "docs",
    logo: "/images/light.png",
    logoDark: "/images/dark.png",
  }),
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}],
    [searchPlugin({})],
    [mermaidPlugin({
      darkSelector: "html",
      darkClass: "dark",
      darkTheme: "dark",
    })],
  ],
  themeConfig: {
    sidebar: sidebarConf,
  },
  port: 1234,
};
