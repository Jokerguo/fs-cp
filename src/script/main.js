const path = require('path')
const fs = require("fs");

const chalk = require("chalk");
const log = console.log;

const handleCopy = (originPath, targetPath)=>{
  return new Promise((resolve, reject) => {
    //fs.copyFile 复制文件
    fs.cp(originPath, targetPath,{force: true,recursive: true}, () => {
        resolve();
    });
});
}

module.exports = {
  copy: async () => {
    const originPathSrc = path.resolve(__dirname, "../origin");
    const targetPathSrc = path.resolve(__dirname, "../target");
    await handleCopy(originPathSrc, targetPathSrc)
    log(chalk.red('拷贝完成'))
  },
}
