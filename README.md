### webpack4.x初学习
1. webpack启动文件
  命令行运行：
``` bash
    webpack --mode development
```
但是运行报错如下：
![image](https://raw.githubusercontent.com/luoyanan/webpack/master/images/1.png)
由于webpack4.x中需要提供默认文件，因此新增src/index.js文件，再运行
运行成功！
此处应有图片-----------
每次通过webpack --mode development运行有些麻烦，因此package.json中script新增：
```json
    "scripts": {
        ....
        "dev": "webpack --mode development"
    },
```
命令行运行
```bash
npm run dev
```