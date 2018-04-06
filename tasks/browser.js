import gulp from 'gulp'
import gutil from 'gulp-util'
import args from './util/args'

gulp.task('browser', cb => {
  if (!args.watch) return cb()
  gulp.watch('src/static/js/*.js', ['scripts'])
  gulp.watch(['src/pages/*.html', 'src/include/*.html'], ['pages'])
  gulp.watch('src/static/css/*.styl', ['css'])
  gulp.watch('src/static/assets/*.*', ['assets'])
  gulp.watch('src/static/fonts/*.*', ['fonts'])
  gulp.watch('src/static/global/*.*',['global'])
  gulp.watch('src/static/vendor/*/*.*',['vendorCSS','vendorScript'])
})
