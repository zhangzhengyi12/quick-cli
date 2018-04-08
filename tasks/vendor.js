import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'
import concat from 'gulp-concat'

//实现css的合并 与压缩
gulp.task('vendorCSS', () => {
  return gulp
    .src('src/static/vendor/css/*.css')
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest('server/static/vendor/css'))
    .pipe(gulpif(args.watch, livereload()))
})

gulp.task('vendorScript',()=>{
  return gulp
    .src('src/static/vendor/js/*.js')
    .pipe(concat('vendor.main.js'))
    .pipe(gulp.dest('server/static/vendor/js'))
    .pipe(gulpif(args.watch, livereload()))
})

gulp.task('vendorFonts',()=>{
  return gulp.src('src/static/vendor/fonts/*.*')
    .pipe(gulp.dest('server/static/vendor/fonts'))
})