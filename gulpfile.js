var gulp 		= require( 'gulp' ),
	sass 		= require( 'gulp-sass' ),
	prefix		= require( 'gulp-autoprefixer' ), 
	bs 			= require('browser-sync').create();

	gulp.task( 'browserSync',  function() {
  		bs.init({
    server: {
      baseDir: './'
    },
  })
});

	gulp.task( 'sass', function() {
		return gulp.src( 'scss/**/*.scss' )
		.pipe( sass() )
		.pipe( prefix( {
			browsers: ['last 2 versions'],
            cascade: false 
        }))
   		.pipe(gulp.dest('css'))
   		.pipe(bs.reload({
   		  stream: true
   		}))
});

	gulp.task('watch', ['browserSync', 'sass'], function (){
  	gulp.watch('scss/**/*.scss', ['sass']);
  	gulp.watch('./*.html' , bs.reload);
  // Other watchers
});
