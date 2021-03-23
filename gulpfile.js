

let 
  project_folder="dist",
  source_folder="src",
  path = {
    build: {
      html: `${project_folder}/`,
      css: `${project_folder}/style/`,
      js: `${project_folder}/js/`,
      img: `${project_folder}/img/`,
      font: `${project_folder}/font/`,
    },
    src: {
      html: `${source_folder}/*.html`,
      css: `${source_folder}/style/index.scss`,
      js: `${source_folder}/js/script.js`,
      img: `${source_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
      font: `${source_folder}/font/*.ttf`,
    },
    watch: {
      html: `${source_folder}/**/*.html`,
      css: `${source_folder}/style/**/*.scss`,
      js: `${source_folder}/js/**/*.js`,
      img: `${source_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
    },
    clean: `./${project_folder}/`
  };


let { src, dest, tree } = require("gulp"),
  gulp = require("gulp"),
  browser_sync = require("browser-sync").create(),
  scss = require("gulp-sass"),
  clean_css = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  uglify = require("gulp-uglify-es").default,
  fileinclude = require("gulp-file-include"),
  imagemin = require("gulp-imagemin"),
  fs = require("fs"),
  del = require("del");
  

function browserSync() {
  browser_sync.init({
    server: {
      baseDir: `./${project_folder}/`
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browser_sync.stream())
}

function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded"
      })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(dest(path.build.css))
    .pipe(browser_sync.stream())
}

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(rename({
      extname: ".min.js"
    }))
    .pipe(dest(path.build.js))
    .pipe(browser_sync.stream())
}

function img() {
  return src(path.src.img)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3 //0 to 7
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browser_sync.stream())
}

function font() {
  return src(path.src.font)
    .pipe(dest(path.build.font))
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], img);
}

function clean() {
  return del(path.clean)
}

let build = gulp.series(clean, gulp.parallel( js, css, html, img, font));
let watch = gulp.parallel(build, watchFiles, browserSync);
exports.font = font;
exports.img = img;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;