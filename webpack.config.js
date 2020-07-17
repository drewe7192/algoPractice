const path = require('path');

module.exports = {

    mode: "development",

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },


    entry: './src/index.ts',

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
}