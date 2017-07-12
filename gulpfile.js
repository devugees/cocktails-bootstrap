var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
