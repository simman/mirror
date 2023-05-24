const fs = require("fs");

const mirrors = [
  {
    name: "npmjs",
    desc: "npm 官方源",
    url: "https://registry.npmjs.org",
    npm_config: ["registry=https://registry.npmjs.org"],
  },
  {
    name: "npmmirror",
    desc: "淘宝 NPM 镜像",
    url: "https://registry.npmmirror.com/",
    npm_config: [
      "registry=https://registry.npmmirror.com/",
      "better_sqlite3_binary_host=https://cdn.npmmirror.com/binaries/better-sqlite3",
      "keytar_binary_host=https://cdn.npmmirror.com/binaries/keytar",
      "sharp_binary_host=https://cdn.npmmirror.com/binaries/sharp",
      "sharp_libvips_binary_host=https://cdn.npmmirror.com/binaries/sharp-libvips",
      "nodejieba_binary_host_mirror=https://cdn.npmmirror.com/binaries/nodejieba",
      "robotjs_binary_host=https://cdn.npmmirror.com/binaries/robotjs",
    ],
    env: [
      "CHROMEDRIVER_CDNURL=https://cdn.npmmirror.com/binaries/chromedriver",
      "ELECTRON_BUILDER_BINARIES_MIRROR=https://cdn.npmmirror.com/binaries/electron-builder-binaries/",
      "PUPPETEER_DOWNLOAD_BASE_URL=https://cdn.npmmirror.com/binaries/chrome-for-testing",
      "PUPPETEER_DOWNLOAD_HOST=https://cdn.npmmirror.com/binaries/chrome-for-testing",
      "PLAYWRIGHT_DOWNLOAD_HOST=https://cdn.npmmirror.com/binaries/playwright",
      "SENTRYCLI_CDNURL=https://cdn.npmmirror.com/binaries/sentry-cli",
      "COREPACK_NPM_REGISTRY=https://registry.npmmirror.com",
      "NVM_NODEJS_ORG_MIRROR=https://cdn.npmmirror.com/binaries/node",
      "SWC_BINARY_SITE=https://cdn.npmmirror.com/binaries/node-swc",
      "NODEJS_ORG_MIRROR=https://cdn.npmmirror.com/binaries/node",
      "ELECTRON_MIRROR=https://cdn.npmmirror.com/binaries/electron/",
      "SAUCECTL_INSTALL_BINARY_MIRROR=https://cdn.npmmirror.com/binaries/saucectl",
      "SASS_BINARY_SITE=https://cdn.npmmirror.com/binaries/node-sass",
      "NWJS_URLBASE=https://cdn.npmmirror.com/binaries/nwjs/v",
      "RE2_DOWNLOAD_MIRROR=https://cdn.npmmirror.com/binaries/node-re2",
      "RE2_DOWNLOAD_SKIP_PATH=true",
      "PHANTOMJS_CDNURL=https://cdn.npmmirror.com/binaries/phantomjs",
      "OPERADRIVER_CDNURL=https://cdn.npmmirror.com/binaries/operadriver",
      "CYPRESS_DOWNLOAD_PATH_TEMPLATE=https://cdn.npmmirror.com/binaries/cypress/${version}/${platform}-${arch}/cypress.zip",
    ],
  },
  {
    name: "ustc",
    desc: "中国科学技术大学源",
    url: "https://npmreg.proxy.ustclug.org/",
    npm_config: ["registry=https://npmreg.proxy.ustclug.org/"],
    env: ["NVM_NODEJS_ORG_MIRROR=https://mirrors.ustc.edu.cn/node/"],
  },
];

fs.writeFileSync("./mirrors/nodejs.json", JSON.stringify(mirrors, null, 2));
