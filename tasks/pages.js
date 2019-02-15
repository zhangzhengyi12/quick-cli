import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'
import path from 'path'
import fileinclude from 'gulp-file-include'
import plumber from 'gulp-plumber'
import fs from 'fs'
import ejs from 'gulp-ejs'
import rev from './util/rev'
import htmlbeautify from 'gulp-html-beautify'
import rename from 'gulp-rename'
var data = require('gulp-data')

function respath(dir) {
  return path.join(__dirname, './', dir)
}

gulp.task('pages', () => {
  return gulp
    .src('src/pages/*.ejs')
    .pipe(
      plumber({
        errorHandle: function(err) {
          console.log(err)
        }
      })
    )
    .pipe(
      data(function(file) {
        let jsonStr
        try {
          jsonStr = fs.readFileSync(
            './src/pages/render/' +
              path.basename(file.path).replace('ejs', 'json'),
            'utf-8'
          )
        } catch (e) {
          console.warn(
            '未找到名为' + file.path + '的json文件，请确认是否添加，已忽略'
          )
          return '{}'
        }
        if (!/^\{[^]*\}$/.test(jsonStr.toString())) {
          console.warn('请确认JSON格式是否正确')
          return '{}'
        }
        return JSON.parse(jsonStr)
      })
    )
    .pipe(ejs())
    .pipe(rev())
    .pipe(
      gulpif(
        !args.watch,
        htmlbeautify({
          indent_size: 4,
          indent_char: ' '
        })
      )
    )
    .pipe(
      rename({
        extname: '.html'
      })
    )
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch, livereload()))
})
