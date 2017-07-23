var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching sass/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("sass/*.sass", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("css/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});
gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.sass', ['sass']);
});
gulp.task('default', ['serve', 'sass:watch']);
