import gulp from 'gulp';
import gulpSequence from "gulp-sequence";

gulp.task('build',gulpSequence('clean','css','fonts','pages','scripts','assets','vendorCSS','vendorScript',['browser','server']));