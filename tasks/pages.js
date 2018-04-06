import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'
import path from 'path'
import fileinclude from 'gulp-file-include'

function respath(dir) {
  return path.join(__dirname, './', dir)
}

gulp.task('pages', () => {
  return gulp
    .src('src/pages/*.html')
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: respath('../src/include/')
      })
    )
    .pipe(gulp.dest('server/views'))
    .pipe(gulpif(args.watch, livereload()))
})
