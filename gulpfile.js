// var gulp = require("gulp");
// gulp.task('pranie', function(){
//   console.log("robię pranie");
// });




var gulp = require("gulp");
// var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task("test", function(){
  return gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// var gulp = require('gulp');


gulp.task('sass', function(){
  //Taking the path from object
  return gulp.src('scss/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    errLogToConsole:true,
    outputStyle:'expanded'
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))

});

gulp.task('default',['sass'], function(){
gulp.watch('scss/**/*.scss', ["sass"]);
});
