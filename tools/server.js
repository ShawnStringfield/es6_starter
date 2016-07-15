'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('serve', function() {
  browserSync.init({
    server: './src',
    notify: false,
    open: false,
    files: [
      '**/*.html',
      '**/*.js'
    ]
  });
});
