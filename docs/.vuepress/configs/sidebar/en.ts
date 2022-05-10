import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/en/ctf/": [
    {
      text: "CTF",
      children: [
        {
          text: "Notes",
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
                {
                  text: "Web Exercise",
                  link: "/en/ctf/writeup/xctf/web/exercise/",
                },
                {
                  text: "Web Challenge",
                  link: "/en/ctf/writeup/xctf/web/challenge/",
                },
              ],
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
      text: "Program Language",
      children: [
        {
          text: "Frontend",
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
          text: "Backend",
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
          text: "Database",
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
      text: "Tutorial",
      children: [
        {
          text: "OS",
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
          text: "Required Tools",
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
          text: "Continuous integration",
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
      text: "Links",
      children: [
        {
          text: "Featured Links",
          children: [
            {
              text: "Blog",
              link: "//ollyhsu.com/",
            },
            {
              text: "Tools",
              link: "/en/links/tools/",
            },
          ],
        },
        {
          text: "Friends",
          link: "/en/links/friends/",
          children: [],
        },
      ],
    },
  ],
  "/en/about/": [
    {
      text: "About",
      children: [
        {
          text: "About Me",
          link: "/en/about/me/",
        },
        {
          text: "About Site",
          link: "/en/about/site/",
        },
      ],
    },
  ],
};
