const path = require('path')



module.exports ={
    entry: './task/frontend/src/index.js',
    output: {
        path: path.resolve(__dirname, 'task/frontend/static/frontend'),
        filename: 'main.js'

    },

    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    }
}