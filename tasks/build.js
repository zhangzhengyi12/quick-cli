import gulp from 'gulp';
import gulpSequence from "gulp-sequence";

gulp.task('build',gulpSequence('clean','css','fonts','pages','scripts','global','assets','vendorCSS','vendorScript','vendorFonts',['browser','server']));