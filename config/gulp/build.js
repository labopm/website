const gulp = require("gulp");

// Run all tasks needed for a build, in defined order
gulp.task(
  "build",
  gulp.series("buildJekyll", "cssBuild")
);
