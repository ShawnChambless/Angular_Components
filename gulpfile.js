var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatSass = require('gulp-cssimport'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    annotate = require('gulp-ng-annotate'),
    prefix   = require('gulp-autoprefixer'),
    watch    = require('gulp-watch'),
    paths    = {
        sass: ['styles/**/*.s*ss'],
        js:   ['app/**/*.js']
    };
    
gulp.task('sass', function(done) {
    gulp.src('styles/main.sass')
        .pipe(plumber())
        .pipe(concatSass())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', {cascade: false}))
        .pipe(gulp.dest('./'))
        .on('end', done);
});

gulp.task('js', function(done) {
    gulp.src(paths.js)
        .pipe(plumber())
        .pipe(annotate())
        // .pipe(uglify())
        // .pipe(gulp.dest('app'))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js,   ['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);