import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/ctf/": [
    {
      text: "CTF",
      children: [
        {
          text: "笔记",
          link: "/ctf/notes/",
          children: [
            {
              text: "Misc",
              link: "/ctf/notes/misc/",
            },
            {
              text: "Web",
              link: "/ctf/notes/web/",
            },
            {
              text: "PWN",
              link: "/ctf/notes/pwn/",
            },
            {
              text: "Crypto",
              link: "/ctf/notes/crypto/",
            },
            {
              text: "Reverse",
              link: "/ctf/notes/reverse/",
            },
            {
              text: "Blockchain",
              link: "/ctf/notes/blockchain/",
            },
          ],
        },
        {
          text: "Writeup",
          link: "/ctf/writeup/",
          children: [
            {
              text: "XCTF",
              link: "/ctf/writeup/xctf/",
              children: [
                "xctf1",
                "xctf2",
            ]
            },
            {
              text: "BUUCTF",
              link: "/ctf/writeup/buuctf/",
            },
            {
              text: "zstuCTF",
              link: "/ctf/writeup/zstuctf/",
            },
            {
              text: "Jarvis OJ",
              link: "/ctf/writeup/jarvisoj/",
            },
          ],
        },
      ],
    },
  ],
  "/program/": [
    {
      text: "编程语言",
      children: [
        {
          text: "前端",
          link: "/program/frontend/",
          children: [
            {
              text: "HTML",
              link: "/program/frontend/html/",
            },
            {
              text: "CSS",
              link: "/program/frontend/css/",
            },
            {
              text: "Javascript",
              link: "/program/frontend/javascript/",
            },
            {
              text: "Vue",
              link: "/program/frontend/vue/",
            },
          ],
        },
        {
          text: "服务端",
          link: "/program/backend/",
          children: [
            {
              text: "C",
              link: "/program/backend/c/",
            },
            {
              text: "C++",
              link: "/program/backend/cpp/",
            },
            {
              text: "Java",
              link: "/program/backend/java/",
            },
            {
              text: "Python",
              link: "/program/backend/python/",
            },
            {
              text: "Golang",
              link: "/program/backend/golang/",
            },
          ],
        },
        {
          text: "数据库",
          link: "/program/database/",
          children: [
            {
              text: "MySQL",
              link: "/program/database/mysql/",
            },
            {
              text: "SQLite",
              link: "/program/database/sqlite/",
            },
            {
              text: "Redis",
              link: "/program/database/redis/",
            },
          ],
        },
      ],
    },
  ],
  "/tutorial/": [
    {
      text: "技术教程",
      children: [
        {
          text: "操作系统",
          link: "/tutorial/os/",
          children: [
            {
              text: "CentOS",
              link: "/tutorial/os/centos/",
            },
            {
              text: "Ubuntu",
              link: "/tutorial/os/ubuntu/",
            },
            {
              text: "macOS",
              link: "/tutorial/os/macos/",
            },
            {
              text: "Kali Linux",
              link: "/tutorial/os/kali/",
            },
            {
              text: "Windows",
              link: "/tutorial/os/windows/",
            },
          ],
        },
        {
          text: "必备工具",
          link: "/tutorial/tools/",
          children: [
            {
              text: "Git",
              link: "/tutorial/tools/git/",
            },
            {
              text: "SVN",
              link: "/tutorial/tools/svn/",
            },
            {
              text: "Latex",
              link: "/tutorial/tools/latex/",
            },
            {
              text: "Markdown",
              link: "/tutorial/tools/markdown/",
            },
          ],
        },
        {
          text: "持续集成",
          link: "/tutorial/ci/",
          children: [
            {
              text: "Docker",
              link: "/tutorial/ci/docker/",
            },
            {
              text: "Kubernetes",
              link: "/tutorial/ci/kubernetes/",
            },
          ],
        },
      ],
    },
  ],
  "/links/": [
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
              link: "/links/tools/",
            },
          ],
        },
        {
          text: "本站友链",
          link: "/links/friends/",
          children: [],
        },
      ],
    },
  ],
  "/about/": [
    {
      text: "关于",
      children: [
        {
          text: "关于我",
          link: "/about/me/",
        },
        {
          text: "关于本站",
          link: "/about/site/",
        },
      ],
    },
  ],
};
