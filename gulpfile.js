var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less-sourcemap');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var rimraf = require('rimraf');

var build = path.join(__dirname, 'build');

gulp.on('err', function() {
	process.exit(1);
});

gulp.task('clean', function(cb) {
	rimraf(build, cb);
});

gulp.task('css', function() {
	return gulp.src('src/main.less')
		.pipe(less({
			globalVars: { 'bootstrap-dir': "'../node_modules/bootstrap/less'" },
			generateSourceMap: true,
            sourceMapRootpath: '../src',
			paths: [ path.join(__dirname, 'src') ],
			compress: false
		}))
        .pipe(autoprefixer())
		.pipe(gulp.dest(build));
});

gulp.task('dev', function() {
  gulp.watch('src/**/*.less', ['clean', 'css']);
});

gulp.task('build', function(done) {
	runSequence('clean', 'css', done);
});
gulp.task('default', ['build']);
