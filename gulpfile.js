const gulp = require('gulp');
const webp = require('gulp-webp');
const cleanCSS = require('gulp-clean-css');

gulp.task('default', () =>
    gulp.src('resources/img/*/*.{gif,jpg,jpeg,png,svg}')
        .pipe(webp())
        .pipe(gulp.dest('resources/view/assets/img/')),

    gulp.src('resources/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('resources/view/assets/css/')),
);