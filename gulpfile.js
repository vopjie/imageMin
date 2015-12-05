var gulp = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  plugins = gulpLoadPlugins(),
  pngquant = require('imagemin-pngquant'),
  imageminJpegtran = require('imagemin-jpegtran'),
  imageminGifsicle = require('imagemin-gifsicle');

// 图片压缩处理队列
gulp.task('imgmin', ['png', 'jpeg', 'gif']);

gulp.task('png', function() {
  return gulp.src('images/*.png')
    .pipe(plugins.imagemin({
      use: [pngquant()]
    }))
    .pipe(gulp.dest('imageMin/'));
});
gulp.task('jpeg', function() {
  return gulp.src('images/*.jpg')
    .pipe(plugins.imagemin({
      use: [imageminJpegtran()]
    }))
    .pipe(gulp.dest('imageMin/'));
});
gulp.task('gif', function() {
  return gulp.src('images/*.gif')
    .pipe(plugins.imagemin({
      use: [imageminGifsicle()]
    }))
    .pipe(gulp.dest('imageMin/'));
});

// 默认任务
gulp.task('default', ['imgmin']);
