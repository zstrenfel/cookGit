// var notify = require("gulp-notify");
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    debug = require('gulp-debug'),
    uglify = require('gulp-uglify');


//file location paths
var path = {
  js: ['./app/main.js'],
  css: ['./app/styles/main.scss'],
}

//browserify to import dependencies
gulp.task('browserify', function() {
  return browserifySetup();
})

//browser-sync
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:8000",
    files: ["public/bundle.js", "public/bundle.css", "public/index.html"],
    browser: "firefox",
    port: 7000,
    online: true
  });
})

//gulp-webserver to make pages accessible on localhost
gulp.task('nodemon', function(cb) {
  var started = false;
  return nodemon({
    script:'./index.js',
  })
    .on('start', function() {
      if (!started) {
        cb();
        started = true;
      }
    });
});

//sass to compile css
gulp.task('sass', function() {
  gulp.src(path.css)
    .pipe(plumber({
      errorHandler: function (err) {
          gutil.log( gutil.colors.yellow(err.message));
          gutil.beep();
          this.emit('end');
      }
    }))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(plumber.stop())
    .pipe(debug({title: 'sass'}))
    .pipe(gulp.dest('./public'))
});

gulp.task('default', ['browser-sync', 'browserify'], function() {
  gulp.watch('./app/styles/**/*.scss', ['sass']);
});

//====== helper functions =====//

//finds dependencies and updates on changes with watchify
function browserifySetup() {
  var b = browserify( path.js, {
    transform: [['babelify', {'presets': ["es2015", "react"]}]],
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true
  });
  b = watchify(b);
  rebundle(b);
  b.on('update', function() {
    gutil.log('updating dependencies');
    rebundle(b);
  });
};

function rebundle(b) {
  var stream = b.bundle()
  return stream
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./public'))
};