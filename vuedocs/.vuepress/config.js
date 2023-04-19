import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "AIBaseTool AIGC 开源项目合集",
  description: "这里是由 AIBaseTool 开发的 AIGC 开源项目合集",
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: "官网",
        link: "https://aibasetool.com/",
      },
    ],
    // Public 文件路径
    // // URL
    // logo: "https://vuejs.org/images/logo.png",
  }),
});
