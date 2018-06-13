var gulp = require('gulp')
, connect = require('gulp-connect-multi')();
  
gulp.task('arquivos', function(){
 gulp.src(['../app/views/geolocate/**/**/*.*'])
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload())
  })
  
gulp.task('servidor', connect.server({
 	root: ['build'],
 	port: 3000,
 	livereload: true,
 	open: {
    browser: 'chrome' //ou firefox ou safari... se for OSX é 'Google Chrome'
  }
}))

gulp.task('watch', function(){
    gulp.watch(['../app/**/**'], ['arquivos']);
})

gulp.task('default', ['arquivos', 'servidor', 'watch'])
