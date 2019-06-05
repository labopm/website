/*jshint node:true, esversion: 6 */
"use strict";

const autoprefixer = require("autoprefixer");
const autoprefixerOptions = require("./browsers");
const cssnano = require("cssnano");
const gulp = require("gulp");
const mqpacker = require("css-mqpacker");
const notify = require("gulp-notify");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

function buildCSS() {
  const processors = [
    // Autoprefix
    autoprefixer(autoprefixerOptions),
    // Pack media queries
    mqpacker({ sort: true }),
    // Minify
    cssnano({ autoprefixer: { browsers: autoprefixerOptions } })
  ];
  return gulp
    .src("_scss/**/*.scss")
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({
        includePaths: [
          "node_modules/uswds/dist/scss",
          "node_modules/uswds/dist/scss/packages",
          "_scss"
        ],
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(postcss(processors))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/stylesheets"))
    .pipe(gulp.dest("_site/assets/stylesheets"))
    .pipe(
      notify({
        sound: "Pop" // case sensitive
      })
    );
}

gulp.task("buildCSS", gulp.series(buildCSS));

gulp.task(
  "sass-rebuild",
  gulp.series("cssBuild", "browsersync:reload")
);

exports.buildCSS = buildCSS;
