module.exports={
    entry: './index.js',
    output:{
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool:'source-map',
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            {test:/\.js$/,loader:'react-hot!babel',exclude:/node_modules/}
        ]
    }
};