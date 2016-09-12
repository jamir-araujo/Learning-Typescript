var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var typescript = require("typescript");
var runSequence = require("run-sequence");
var del = require("del");
var path = require("path");

var TS_FILES_PATH = "./src/**/*.ts";
var MAIN_D_TS_PATH = "./typings/index.d.ts";
var BUILD_FOLDER_PATH = "./Build";
var ALL_FILES_PATH = "./src/**/*.*";
var TS_CONFIG_FILE_PATH = "tsconfig.json";
var SOURCE_ROOT = path.join(__dirname, "Build");

var tasks = {
    clear: "clear",
    compile: "compile-typescript",
    copy: "copy",
    build: "build",
    watch: "watch"
};

//deleta a pasta Build
gulp.task(tasks.clear, function () {
    del(BUILD_FOLDER_PATH);
});

// compila os arquivos *.ts
gulp.task(tasks.compile, function () {
    var tsProject = ts.createProject(TS_CONFIG_FILE_PATH, {
        typescript: typescript
    });

    return gulp.src([MAIN_D_TS_PATH, TS_FILES_PATH])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write("./", { sourceRoot: SOURCE_ROOT }))
        .pipe(gulp.dest(BUILD_FOLDER_PATH));
});

//copia os arquivos ts para a pasta Build
gulp.task(tasks.copy, function () {
    return gulp.src([ALL_FILES_PATH])
        .pipe(gulp.dest(BUILD_FOLDER_PATH));
});

//build padrão
gulp.task(tasks.build, function (callback) {
    runSequence.use(gulp);
    return runSequence(tasks.clear, tasks.compile, tasks.copy, callback);
});

//observa mudaças nos arquivos *.ts e no arquivos tsconfig.json
gulp.task(tasks.watch, function () {
    gulp.watch([TS_FILES_PATH, TS_CONFIG_FILE_PATH], [tasks.compile]);
})