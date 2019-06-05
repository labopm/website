/*jshint node:true, esversion: 6 */
"use strict";

const config = require("./config").browsersync.development;

const gulp = require("gulp");
const browsersync = require("browser-sync");

// Run build task and start a server with BrowserSync
gulp.task("browsersync", gulp.series('build', function() {
  browsersync(config);
}));

// Reload task, that is used by jekyll-rebuild
function browserSyncReload(done) {
  browsersync.reload();
  done();
}
