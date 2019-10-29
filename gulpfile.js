const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("prefix", () =>
  gulp
    .src("style/styles.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("dist"))
);