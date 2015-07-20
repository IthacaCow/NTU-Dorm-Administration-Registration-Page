
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
// var livereload = require('gulp-livereload');

gulp.task('default', [ 'less','concat_ng_controllers' ] );

gulp.task('concat_ng_controllers', function () {
  return gulp.src(['./public/js/index.js','./public/js/controllers/*.js','./public/js/controllers/**/*.js'])
            .pipe(concat('app.js'))
            .pipe(gulp.dest('./public/'))
});

gulp.task('less', function () {
  return gulp.src('./public/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./public/css'))
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html css'
  , env: { 'NODE_ENV': 'development' }
  })
})

// gulp.task('watch', function() {
  // livereload.listen();
  // gulp.watch('public/*', ['less']);
 //  gulp.watch('less/*.less', ['less']);
// });
