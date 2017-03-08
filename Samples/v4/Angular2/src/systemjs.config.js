(function () {
    System.config({
        paths: {
            "npm:": "lib/"
        },
        map: {
            app: "app",
            "@angular/core": "npm:@angular/core/bundles/core.umd.js",
            "@angular/common": "npm:@angular/common/bundles/common.umd.js",
            "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
            "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
            "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
            "@angular/http": "npm:@angular/http/bundles/http.umd.js",
            "@angular/router": "npm:@angular/router/bundles/router.umd.js",
            "@angular/forms": "npm:@angular/forms/bundles/forms.umd.js",
            "rxjs": "npm:rxjs"
        },
        packages: {
            app: {
                main: "./main.js",
                defaultExtension: "js"
            },
            rxjs: {
                defaultExtension: "js"
            }
        }

        // map: {
        //     "rxjs": "lib/rxjs",
        //     "@angular": "lib/@angular",
        // },
        // packages: {
        //     "app": {
        //         defaultExtension: "js"
        //     },
        //     "@angular/common": {
        //         main: "bundles/common.umd.js",
        //         defaultExtension: "js"
        //     },
        //     "@angular/compiler": {
        //         main: "bundles/compiler.umd.js",
        //         defaultExtension: "js"
        //     },
        //     "@angular/core": {
        //         main: "bundles/core.umd.js",
        //         defaultExtension: "js"
        //     },
        //     "@angular/forms": {
        //         main: "bundles/forms.umd.js",
        //         defaultExtension: "js"
        //     },
        //     "@angular/http": {
        //         main: "bundles/http.umd.js",
        //         defaultExtension: "js"
        //     },
        //     "@angular/platform-browser": {
        //         main: "bundles/platform-browser.umd.js",
        //         defaultExtension: "js"
        //     },
        //     "@angular/platform-browser-dynamic": {
        //         main: "bundles/platform-browser-dynamic.umd.js",
        //         defaultExtension: "js"
        //     },
        //     "@angular/router": {
        //         main: "bundles/router.umd.js",
        //         defaultExtension: "js"
        //     },
        //     "rxjs": {
        //         defaultExtension: "js",
        //         format: "cjs"
        //     }
        // }
    });
})();