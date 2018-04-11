import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';
import chalk from 'chalk'

gulp.task('server',(cb)=>{
    if(!args.watch) return cb();
    
    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();
    gulp.watch(['server/static/js/*.js','server/views/*.html','server/views/*/*.html','server/static/css/*.css'],function(file){
        server.notify.apply(server,[file]);
    })
    
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    });

    console.log(chalk.green(
        '正在启动服务 ... '
    ));
})