var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var typescript = require("typescript");
var runSequence = require("run-sequence");
var del = require("del");

var paths = {
    src: "./src/**/*.*",
    srcNoTs: "!./src/**/*.ts",
    tsFiles: "./src/**/*.ts",
    typings: "./typings/index.d.ts",
    typingsFixes: "./typings_fixes/index.d.ts",
    build: "./build",
    libs: "./build/lib",
    bower: "./bower_components/**/*.*",
    tsconfig: "tsconfig.json"
};

var tasks = {
    clear: "clear",
    transpile: "transpile",
    copy: "copy",
    copyBower: "copy-bower",
    build: "build"
};

gulp.task(tasks.clear, function (cb) {
    return del(paths.build, cb);
});

gulp.task(tasks.transpile, function () {
    var tsProject = ts.createProject(paths.tsconfig, {
        typescript: typescript
    });

    return gulp.src([paths.tsFiles, paths.typings, paths.typingsFixes])
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

gulp.task(tasks.copyBower, function () {
    return gulp.src([paths.bower])
        .pipe(gulp.dest(paths.libs));
});

gulp.task(tasks.build, function (callback) {
    runSequence.use(gulp);
    return runSequence(tasks.clear, tasks.transpile, tasks.copy, tasks.copyBower, callback);
});