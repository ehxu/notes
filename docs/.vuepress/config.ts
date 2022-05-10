import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { navbar, sidebar } from "./configs";
const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  // 站点配置
  base: "/",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/images/icon.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/images/icon.png`,
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "VuePress" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "VuePress" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: `/images/icon.png` }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/icon.png",
        color: "#3eaf7c",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],

  locales: {
    // 默认zh-CN
    "/": {
      lang: "zh-CN",
      title: "Olly's Notes",
      description: "你的假装努力，欺骗的只有你自己",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Olly's Notes",
    //   description: "Vue-powered Static Site Generator",
    // },
  },
  theme: defaultTheme({
    logo: "/images/icon.png",

    repo: "ollyhsu/mynotes",

    docsDir: "docs",

    // theme-level locales config
    locales: {
      // 默认zh-CN
      "/": {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",

        // sidebar
        sidebar: sidebar.zh,
        sidebarDepth: 2,

        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",

        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",

        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",
        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
        toggleSidebar: "切换侧边栏",
        themePlugins: {
          // only enable git plugin in production mode
          git: isProd,
          // use shiki plugin in production mode instead
          prismjs: !isProd,
        },
      },
      // "/en/": {
      //   // navbar
      //   navbar: navbar.en,
      //   selectLanguageName: "English",
      //   // sidebar
      //   sidebar: sidebar.en,
      //   sidebarDepth: 2,
      // },
    },

    themePlugins: {},
  }),
});
