const path = require('path');
const obj = {
    mode:'development',
    //可以是字符串 可以是对象 index：xxx
    entry:'./1.js',
    //开发环境不需要出口
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'images'
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        contentBase:"./",//本地服务器所加载的页面所在的目录
        historyApiFallback:true,//不跳转
        inline:true,
        port:8080,
        hot:true
    },
    plugins:[
        new HtmlwebpackPlugin({
            template:'./index.html',
            filename:'index.html',
            title:'haha'
        })
    ]
}

module.exports = obj;