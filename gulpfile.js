var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    neat = require('postcss-neat');
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    cssnext = require('cssnext'),
    mqpacker = require('css-mqpacker'),
    csswring = require('csswring'),
    sourcemaps = require('gulp-sourcemaps'),
    jade = require('gulp-jade'),
    mixins = require('postcss-mixins'),
    position = require('postcss-position'),
    simpleVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    each = require('postcss-each'),
    sassy = require('postcss-sassy'),
    clearfix = require('postcss-clearfix'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jpegtran = require('imagemin-jpegtran'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminOptipng = require('imagemin-optipng');
    uglify = require('gulp-uglify'),
    inlineComments = require('postcss-inline-comment'),
    sassyMixin = require('postcss-sassy-mixins'),
    rename  = require('gulp-rename'),
    imageminSvgo = require('imagemin-svgo');

gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 2 versions']}),
    cssnext,
    precss,
    mqpacker,
    mixins,
    position,
    nested,
    each,
    sassy,
    clearfix,
    neat({}),
    inlineComments(),
    sassyMixin,
    csswring
  ];
  return gulp.src('./cssnext/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'));

});

gulp.task('default', function() {
    gulp.watch('./cssnext/**/*.css', ['css']);
});
