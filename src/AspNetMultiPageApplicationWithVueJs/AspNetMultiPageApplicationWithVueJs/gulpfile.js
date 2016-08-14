/// <binding BeforeBuild='webpack:build-dev' />
"use strict";

var gulp = require("gulp"),
    webpack = require("webpack"),
    gutil = require("gulp-util");

gulp.task('copy-dependencies', function () {
    return gulp.src('./node_modules/vue/dist/*.js')
        .pipe(gulp.dest('./Scripts/vue/'));
})

gulp.task("webpack", function (callback) {

    // run webpack
    webpack(require('./webpack.config.js'), function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

var myDevConfig = require('./webpack.config.js');
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task('webpack:build-dev', function (callback) {
    // run webpack
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('watch-webpack', function () {
    gulp.watch(["scripts/src/**/*"], ["webpack:build-dev"]);
});