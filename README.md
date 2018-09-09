### webpack4.x初学习
1. webpack启动文件
  
    命令行运行：
    ``` bash
        webpack --mode development
    ```
    但是运行报错如下：

    ![image](https://raw.githubusercontent.com/luoyanan/webpack/master/images/1.png)
  
    由于webpack4.x中需要提供默认文件，因此新增src/index.js文件，再运行
    
    ![image](https://raw.githubusercontent.com/luoyanan/webpack/master/images/1.png)

    每次通过webpack --mode development运行有些麻烦，因此package.json中script新增：
    
    ```json
        "scripts": {
            "dev": "webpack --mode development"
        },
    ```
    
    命令行运行
    
    ```bash
    npm run dev
    ```
2. webpack的配置([webpack配置项](https://webpack.js.org/configuration/))
    1. 新建webpack.config.js文件
    
        ```javascript
        module.exports = {
            mode: 'development'
        }
        ```
        同时package.json中script.dev中修改为

        ```json
        "scripts": {
            "dev": "webpack --config webpack.config.js"
        }
        ```
        此时同样可以通过npm run dev启动项目 
    2. 常用配置项
        * webpack启动入口文件配置：entry 
            ```javascript
                entry:{
                    path:'./src/entrya.js'
                },
            ```
        * webpack在哪输出bundle后的文件：output
            ```javascript
                output:{
                    filename: 'mybundle.js',
                    path: path.resolve(__dirname,'dist')
                },
            ```
            注意：此处output.path必须是绝对路径,path变量需要引入内置木块
            ```javascript
                const path = require('path')
            ```
3. 常用loaders(所有的见[webpack loaders](https://webpack.js.org/loaders/babel-loader/))
    * 处理js:babel-loader
    首先需要安装：
    ```bash
        npm install babel-loader @babel/core @babel/preset-env
    ```
    ```javascript
        module:{
            rules:[
                {
                    test:/\.js$/,
                    include:[ path.resolve(__dirname, './src') ],
                    use:{
                        loader:'babel-loader',
                    }
                }
            ]
        }
    ```
    其中rules.include可指定需要编译的文件夹，rule.exlcude可排除不需编译的文件夹：如node_modules
    但是！babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码
    因此，如果需要支持这些新的API，需要引入babel-polyfill
    全局引入babel-polufill会使打包后的文件体积太大，因此这里用transform-runtime
    ```bash
        npm install @babel/plugin-transform-runtime @babel/runtime --save-dev
    ```
    ```javascript
        rules:[
            use:{
                options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-plugin']
                    }
            }
        ]
    ```

    
    
    

        



    