const path = require('path');
const appDirectory = path.resolve("../");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].wxss"
});

module.exports = {
    mode:'production',
    entry:{},
    output: {
        path: appDirectory,
        filename: '[name].wxss'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include:[
                    path.resolve(appDirectory, "scss")
                ],
                exclude: [
                    path.resolve(appDirectory, "node_modules")
                ],
                //{loader: "style-loader"} // 将 JS 字符串生成为 style 节点,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }]
                })
            }
        ]
    },
    watch:true,
    watchOptions: {
        // aggregateTimeout: 1000, //编译的延迟
        ignored: [/node_modules/],//忽略不必要的文件
        // poll: 500 // 轮询监听
    },
    devtool: "source-map",
    plugins: [
        extractSass
    ]
};

