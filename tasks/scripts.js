import gulp from 'gulp'
import gulpif from 'gulp-if'
import concat from 'gulp-concat'
import named from 'vinyl-named'
import livereload from 'gulp-livereload'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import { log, colors } from 'gulp-util'
import args from './util/args'

gulp.task('scripts', () => {
  return gulp
    .src(['src/static/js/*.js'])
    .pipe(
      plumber({
        errorHandle: function() {}
      })
    )
    .pipe(named())
    .pipe(gulpif(!args.watch, uglify({ compress: { properties: false }, output: { quote_keys: true } })))
    .pipe(gulp.dest('server/static/js'))
    .pipe(gulpif(args.watch, livereload()))
})
