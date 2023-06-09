const fs = require("fs");
const path = require("path");
const fileSave = require("file-save");
//读取 mock/videos.ts下的文件内容
const videoSrcList = fs.readFileSync(
  path.resolve(__dirname, "./src/mock/videos.ts"),
  "utf-8"
);

//去掉空格和 tab
const nameList = videoSrcList
  .split("\n")
  .slice(1, -1)
  .map((v) => v.slice(46).split(".")[0]);

//为每个视频生成一个路由
const caseRoutes = nameList.map((v, i) => {
  return {
    path: v,
    component: `() => import('@/templates/${v}/index.vue')`,
  };
});

const stringify = (obj) => {
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'function' || value === undefined) {
      return String(value);
    }
    return value;
  },2);
}
const routesStr = `export default ${stringify(caseRoutes)}  `;
fileSave(path.resolve(__dirname, `./src/router/cases.js`)).write(
  routesStr,
  "utf8"
);

//生成对应 vue 页面文件
const template = (name) => {
  return `<template>
   <div class="${name}">
      <h1 class="text-3xl">${name} works !!!</h1>
    </div>
</template>`;
};
//生成对应的 vue 文件
const genateVueFile = (name) => {
  //创建文件夹
  const dirPath = path.resolve(__dirname, `./src/templates/${name}`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(path.resolve(__dirname, `./src/templates/${name}`));
  }
  fs.mkdirSync(path.resolve(__dirname, `./src/templates/${name}/components`))

  //创建文件 并写入内容
  fileSave(path.resolve(__dirname, `./src/templates/${name}/index.vue`)).write(
    template(name),
    "utf8"
  );
};
nameList.forEach((v) => {
  genateVueFile(v);
});
