/*jshint node:true, esversion: 6 */
"use strict";

const gulp = require("gulp");
const cp = require("child_process");
const log = require("fancy-log");
const task = "jekyll";

const env = process.env.NODE_ENV || "prod";

// Build Jekyll site
function buildJekyll() {
  log("Running buildJekyll");

  if (env === "prod") {
    log("Building for production");
    return cp
      .spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" })
      .on("close", done);
  } else {
    log("Building for development");
    return cp
      .spawn(
        "bundle",
        ["exec", "jekyll", "build", "--config", "_config.yml,_config-dev.yml"],
        { stdio: "inherit" }
      )
      .on("close", done);
  }
}

gulp.task("buildJekyll", gulp.series(buildJekyll));

// Rebuild Jekyll site
gulp.task(
  "jekyll-rebuild",
  gulp.series("buildJekyll", "browsersync:reload")
);
