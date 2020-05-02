// .vuepress/config.js
module.exports = {
  title: "《你不知道的 JavaScript》中文翻译",
  base: "/doc-ydkjs/",
  themeConfig: {
    repo: "gdut-yy/You-Dont-Know-JS-zh",
    repoLabel: "Github",
    docsRepo: "gdut-yy/You-Dont-Know-JS-zh",
    docsBranch: "master/docs",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",
    lastUpdated: "Last Updated",
    sidebarDepth: 4,
    nav: [
      {
        text: "你不知道的 JavaScript",
        items: [
          { text: "《起步上路》", link: "/up&going/" },
          { text: "《作用域与闭包》", link: "/scope&closures/" },
          { text: "《this 与对象原型》", link: "/this&objectprototypes/" },
          { text: "《类型与文法》", link: "/types&grammar/" },
          { text: "《异步与性能》", link: "/async&performance/" },
          { text: "《ES6 与未来》", link: "/es6&beyond/" },
        ],
      },
    ],
    // 侧边栏
    sidebar: {
      // 起步上路
      "/up&going/": ["", "foreword.md", "ch1.md", "ch2.md", "ch3.md"],
      // 作用域与闭包
      "/scope&closures/": [
        "",
        "ch1.md",
        "ch2.md",
        "ch3.md",
        "ch4.md",
        "ch5.md",
        "apA.md",
        "apB.md",
        "apC.md",
      ],
      // this与对象原型
      "/this&objectprototypes/": [
        "",
        "foreword.md",
        "ch1.md",
        "ch2.md",
        "ch3.md",
        "ch4.md",
        "ch5.md",
        "ch6.md",
        "apA.md",
      ],
      // 类型与文法
      "/types&grammar/": [
        "",
        "foreword.md",
        "ch1.md",
        "ch2.md",
        "ch3.md",
        "ch4.md",
        "ch5.md",
        "apA.md",
      ],
      // 异步与性能
      "/async&performance/": [
        "",
        "foreword.md",
        "ch1.md",
        "ch2.md",
        "ch3.md",
        "ch4.md",
        "ch5.md",
        "ch6.md",
        "apA.md",
        "apB.md",
      ],
      // ES6与未来
      "/es6&beyond/": [
        "",
        "foreword.md",
        "ch1.md",
        "ch2.md",
        "ch3.md",
        "ch4.md",
        "ch5.md",
        "ch6.md",
        "ch7.md",
        "ch8.md",
      ],
    },
  },
};
