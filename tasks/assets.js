import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'
import imagemin from 'gulp-imagemin'

gulp.task('assets', () => {
  return gulp
    .src('src/static/assets/*')
    .pipe(
      gulpif(
        !args.watch,
        imagemin({
          progressive: true
        })
      )
    )
    .pipe(gulp.dest('server/static/assets'))
    .pipe(gulpif(args.watch, livereload()))
})
