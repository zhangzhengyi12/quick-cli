import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'
import concat from 'gulp-concat'

//实现css的合并 与压缩
gulp.task('fonts', () => {
  return gulp
    .src('src/static/fonts/*.*')
    .pipe(gulp.dest('server/static/fonts'))
    .pipe(gulpif(args.watch, livereload()))
})