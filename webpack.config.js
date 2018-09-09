
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry:{
        path:'./src/entrya.js'
    },
    output:{
        filename: 'mybundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:[ path.resolve(__dirname, './src') ],
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-plugin']
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
}