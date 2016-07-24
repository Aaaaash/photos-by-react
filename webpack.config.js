var webpack=require('webpack');
module.exports={
    entry:[
        "webpack-dev-server/client?http://0.0.0.0:3000",
        "webpack/hot/only-dev-server",
        "./js/main.js"
    ],
    output:{
        path:"./assets/",
        filename:"app.js",
        publicPath: '/assets'
    },
    devtool:"source-map",
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
            {
                test:/\.json$/,
                exclude:/node_modules/,
                loader: 'json'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
