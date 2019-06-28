'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var qr = require("qrcode-terminal");

gulp.task('browser-sync', (done) => {
    const instance = browserSync({
        files: ['js/**/*.js', '**/*.html', 'css/**/*.css'],
        server: {
            baseDir: "./"
        },
        port: 9001,
        https: true,
        open: false
    }, () => {
        let url = instance.getOption('urls').get('external');
        if (url != null)
            qr.generate(url);
    });
    done();
});

gulp.task('default', gulp.series('replace', 'browser-sync'), (done) => {
    done();
});