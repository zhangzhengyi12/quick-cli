var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')


var app = express()

// view engine setup
app.set('views', path.join(__dirname))
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, './')))
app.use(require('connect-livereload')())

// 后续的页面请在这里添加，render的参数为文档的名称 根路由放置到最后

app.use('/about',function(req,res,next){
  res.render('about')
})


app.use('/', function(req, res, next) {
  res.render('index')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

module.exports = app
