'use strict';

import gulp from 'gulp';
import reqdir from 'require-dir';

reqdir('./tools');

gulp.task('default', ['serve'], function() {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});
