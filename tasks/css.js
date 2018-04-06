import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'
import concat from 'gulp-concat'
import minCss from 'gulp-minify-css'
import stylus from 'gulp-stylus'
import poststylus from 'poststylus'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import plumber from 'gulp-plumber'

//实现css的合并 与压缩
gulp.task('css', () => {
  return gulp
    .src('src/static/css/*.styl')
    .pipe(
      plumber({
        errorHandle: function(err) {
          console.log(err)
        }
      })
    )
    .pipe(
      stylus({
        use: [
          poststylus([
            autoprefixer({
              browsers: ['last 4 versions'],
              cascade: false
            })
          ])
        ]
      })
    )
    .pipe(concat('main.min.css'))
    .pipe(gulpif(!args.watch,minCss()))
    .pipe(gulp.dest('server/static/css'))
    .pipe(gulpif(args.watch, livereload()))
})
