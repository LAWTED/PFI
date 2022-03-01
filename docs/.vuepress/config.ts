import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { navbar, sidebar } from './configs'
export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "en-US",
  title: "Lawted's blog",
  description: "Welecome To My World",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    // logo: "/images/logo.png",
    navbar: navbar.NavBarConfig,
    sidebar: sidebar.SidebarConfig,
    repo: "https://gitlab.com/LAWTED",
  },
});
