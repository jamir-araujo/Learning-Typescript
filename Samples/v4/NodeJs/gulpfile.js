var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var typescript = require("typescript");
var runSequence = require("run-sequence");
var del = require("del");

var paths = {
    src: "./src/**/*.*",
    tsFiles: "./src/**/*.ts",
    typings: "./typings/index.d.ts",
    typingsFixes: "./typings_fixes/index.d.ts",
    build: "./build",
    tsConfig: "tsconfig.json"
};

var tasks = {
    clear: "clear",
    transpile: "transpile",
    copy: "copy",
    build: "build",
    watch: "watch"
};

//deleta a pasta Build
gulp.task(tasks.clear, function () {
    del(paths.build);
});

// compila os arquivos *.ts
gulp.task(tasks.transpile, function () {
    var tsProject = ts.createProject(paths.tsConfig, {
        typescript: typescript
    });

    return gulp.src([paths.typings, paths.typingsFixes, paths.tsFiles])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write("./", { sourceRoot: "./" }))
        .pipe(gulp.dest(paths.build));
});

//copia os arquivos ts para a pasta Build
gulp.task(tasks.copy, function () {
    return gulp.src([paths.src])
        .pipe(gulp.dest(paths.build));
});

//build padrão
gulp.task(tasks.build, function (callback) {
    runSequence.use(gulp);
    return runSequence(tasks.clear, tasks.transpile, tasks.copy, callback);
});

//observa mudaças nos arquivos *.ts e no arquivos tsconfig.json
gulp.task(tasks.watch, function () {
    gulp.watch([paths.tsFiles, paths.tsConfig], [tasks.transpile]);
});
