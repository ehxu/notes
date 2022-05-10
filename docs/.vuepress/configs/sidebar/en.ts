import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/en/ctf/": [
    {
      text: "CTF",
      children: [
        {
          text: "笔记",
          link: "/en/ctf/notes/",
          children: [
            {
              text: "Misc",
              link: "/en/ctf/notes/misc/",
            },
            {
              text: "Web",
              link: "/en/ctf/notes/web/",
            },
            {
              text: "PWN",
              link: "/en/ctf/notes/pwn/",
            },
            {
              text: "Crypto",
              link: "/en/ctf/notes/crypto/",
            },
            {
              text: "Reverse",
              link: "/en/ctf/notes/reverse/",
            },
            {
              text: "Blockchain",
              link: "/en/ctf/notes/blockchain/",
            },
          ],
        },
        {
          text: "Writeup",
          link: "/en/ctf/writeup/",
          children: [
            {
              text: "XCTF",
              link: "/en/ctf/writeup/xctf/",
              children: [
                "xctf1",
                "xctf2",
            ]
            },
            {
              text: "BUUCTF",
              link: "/en/ctf/writeup/buuctf/",
            },
            {
              text: "zstuCTF",
              link: "/en/ctf/writeup/zstuctf/",
            },
            {
              text: "Jarvis OJ",
              link: "/en/ctf/writeup/jarvisoj/",
            },
          ],
        },
      ],
    },
  ],
  "/en/program/": [
    {
      text: "编程语言",
      children: [
        {
          text: "前端",
          link: "/en/program/frontend/",
          children: [
            {
              text: "HTML",
              link: "/en/program/frontend/html/",
            },
            {
              text: "CSS",
              link: "/en/program/frontend/css/",
            },
            {
              text: "Javascript",
              link: "/en/program/frontend/javascript/",
            },
            {
              text: "Vue",
              link: "/en/program/frontend/vue/",
            },
          ],
        },
        {
          text: "服务端",
          link: "/en/program/backend/",
          children: [
            {
              text: "C",
              link: "/en/program/backend/c/",
            },
            {
              text: "C++",
              link: "/en/program/backend/cpp/",
            },
            {
              text: "Java",
              link: "/en/program/backend/java/",
            },
            {
              text: "Python",
              link: "/en/program/backend/python/",
            },
            {
              text: "Golang",
              link: "/en/program/backend/golang/",
            },
          ],
        },
        {
          text: "数据库",
          link: "/en/program/database/",
          children: [
            {
              text: "MySQL",
              link: "/en/program/database/mysql/",
            },
            {
              text: "SQLite",
              link: "/en/program/database/sqlite/",
            },
            {
              text: "Redis",
              link: "/en/program/database/redis/",
            },
          ],
        },
      ],
    },
  ],
  "/en/tutorial/": [
    {
      text: "技术教程",
      children: [
        {
          text: "操作系统",
          link: "/en/tutorial/os/",
          children: [
            {
              text: "CentOS",
              link: "/en/tutorial/os/centos/",
            },
            {
              text: "Ubuntu",
              link: "/en/tutorial/os/ubuntu/",
            },
            {
              text: "macOS",
              link: "/en/tutorial/os/macos/",
            },
            {
              text: "Kali Linux",
              link: "/en/tutorial/os/kali/",
            },
            {
              text: "Windows",
              link: "/en/tutorial/os/windows/",
            },
          ],
        },
        {
          text: "必备工具",
          link: "/en/tutorial/tools/",
          children: [
            {
              text: "Git",
              link: "/en/tutorial/tools/git/",
            },
            {
              text: "SVN",
              link: "/en/tutorial/tools/svn/",
            },
            {
              text: "Latex",
              link: "/en/tutorial/tools/latex/",
            },
            {
              text: "Markdown",
              link: "/en/tutorial/tools/markdown/",
            },
          ],
        },
        {
          text: "持续集成",
          link: "/en/tutorial/ci/",
          children: [
            {
              text: "Docker",
              link: "/en/tutorial/ci/docker/",
            },
            {
              text: "Kubernetes",
              link: "/en/tutorial/ci/kubernetes/",
            },
          ],
        },
      ],
    },
  ],
  "/en/links/": [
    {
      text: "友情链接",
      children: [
        {
          text: "站长精选",
          children: [
            {
              text: "站长博客",
              link: "//vico.vercel.app/",
            },
            {
              text: "实用工具",
              link: "/en/links/tools/",
            },
          ],
        },
        {
          text: "本站友链",
          link: "/en/links/friends/",
          children: [],
        },
      ],
    },
  ],
  "/en/about/": [
    {
      text: "关于",
      children: [
        {
          text: "关于我",
          link: "/en/about/me/",
        },
        {
          text: "关于本站",
          link: "/en/about/site/",
        },
      ],
    },
  ],
};
