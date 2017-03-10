var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var tsc = require("gulp-typescript");
var typescript = require("typescript");
var del = require("del");
var runSequence = require("run-sequence");

var paths = {
    src: "./src/**/*.*",
    srcNoTs: "!./src/**/*.ts",
    tsFiles: "./src/**/*.ts",
    typings: "./typings/index.d.ts",
    build: "./build",
    libs: "./build/lib",
    tsconfig: "tsconfig.json"
};

var tasks = {
    clear: "clear",
    transpile: "transpile",
    copy: "copy",
    copyLibs: "copyLib",
    build: "build"
};

gulp.task(tasks.clear, function (cb) {
    return del(paths.build, cb);
});

gulp.task(tasks.transpile, function () {
    var tsProject = tsc.createProject(paths.tsconfig, {
        typescript: typescript
    });

    return gulp.src([paths.tsFiles, paths.typings])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .js
        .pipe(sourcemaps.write(".", { sourceRoot: "./src" }))
        .pipe(gulp.dest(paths.build));
});

gulp.task(tasks.copy, function () {
    return gulp.src([paths.src, paths.srcNoTs])
        .pipe(gulp.dest(paths.build));
});

gulp.task(tasks.copyLibs, function () {
    return gulp.src([
        "core-js/client/shim.min.js",
        "systemjs/dist/system-polyfills.js",
        "systemjs/dist/system.src.js",
        "reflect-metadata/Reflect.js",
        "bootstrap/dist/**",
        "jquery/dist/**",
        "rxjs/**/*.js",
        "zone.js/dist/**",
        "@angular/**/bundles/**"
    ], { cwd: "node_modules/**" })
        .pipe(gulp.dest(paths.libs));
});

gulp.task(tasks.build, function (callback) {
    runSequence.use(gulp);
    return runSequence(tasks.clear, tasks.transpile, tasks.copy, tasks.copyLibs, callback);
});
