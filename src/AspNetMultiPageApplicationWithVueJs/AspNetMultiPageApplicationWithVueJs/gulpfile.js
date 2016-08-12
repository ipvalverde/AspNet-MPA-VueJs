/// <binding BeforeBuild='webpack' />
"use strict";

var gulp = require("gulp"),
    webpack = require("webpack"),
    gutil = require("gulp-util");

gulp.task("webpack", function (callback) {
    // run webpack
    webpack({
        entry: './scripts/src/app.js',
        output: {
            path: './scripts/built',
            filename: 'app.bundle.js'
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }]
        }
    }, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});