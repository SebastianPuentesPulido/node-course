const server = require("gulp-server-livereload");
const gulp = require("gulp");

gulp.task("build", (cb) => {
  console.log("Building the site...");
  setTimeout(cb, 1000);
});

gulp.task("server", () => {
  gulp.src("www")
    .pipe(server({
        livereload:true,
        open:true,
    }));
});

gulp.task('default',gulp.series('build','server'))