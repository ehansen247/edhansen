var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './index.jsx'),
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                exclude: /node-modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: ['file-loader']
            }
        ]
    },
    watch: true
}