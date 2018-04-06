import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'

//实现css的合并 与压缩
gulp.task('global', () => {
  return gulp
    .src('src/static/global/*.*')
    .pipe(gulp.dest('server/static/global'))
    .pipe(gulpif(args.watch, livereload()))
})