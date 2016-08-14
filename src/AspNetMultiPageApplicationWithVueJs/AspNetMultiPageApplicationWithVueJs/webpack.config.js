module.exports = {
    entry: {
        contactEdit: "./scripts/src/contact/edit.js",
        contactSearch: "./scripts/src/contact/search.js"
    },
    output: {
        path: "./scripts/built",
        filename: "[name].bundle.js"
    },
    externals: {
        "Vue": "Vue"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        }]
    }
}