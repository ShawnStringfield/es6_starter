'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import loadGulpPlugins from 'gulp-load-plugins';

const $ = loadGulpPlugins();

gulp.task('sass', function(){
	return gulp.src('src/sass/**/*.scss')
		.pipe($.sourcemaps.init())
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.autoprefixer({browser: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
});
