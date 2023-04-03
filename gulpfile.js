const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      del = require('del'),
      browserSync = require('browser-sync').create(),
      sourcemaps = require('gulp-sourcemaps'),
      gulpif = require('gulp-if'),
      gcmq = require('gulp-group-css-media-queries'),
      imagemin = require('gulp-imagemin'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      jade = require('gulp-jade'),
      less = require('gulp-less'),
      smartgrid = require('smart-grid');

const isDev = process.argv.indexOf('--dev') !== -1,
      isProd = !isDev,
      isSync = process.argv.indexOf('--sync') !== -1;

const base = './develop/',
      src = './develop/assets/',
      prod = './build/',
      dist = './build/assets/';

let gridOptions = {
   columns: 24,
   offset: "30px",
   // mobileFirst: true,
   container: {
      maxWidth: "1440px",
      fields: "50px" // поля, fields не меньше offset делённого на 2
   },
   breakPoints: {
      ll: {
         width: "1480px"
      },
      large: {
         width: "1380px"
      },
      xxl: {
         width: "1280px",
         fields: "40px",
         offset: "18px"
      },
      xl: {
         width: "1150px"
      },
      middle: {
         width: "1070px"
      },
      lg: {
         width: "995px",
      },
      md: {
         width: "770px",
         fields: "20px",
         offset: "12px"
      },
      sm: {
         width: "580px"
      },
      xs: {
         width: "470px"
      },
      xxs: {
         width: "360px"
      }
   }
};

function html(done){
   return gulp.src( base + '*.jade' )
   .pipe(jade())
   .pipe(gulp.dest( prod ))
   .pipe(gulpif(isSync, browserSync.stream()));
   done();
}
function federal_projects(done){
   return gulp.src([ base + 'sections/federal_projects/*.jade' ] )
   .pipe(jade())
   .pipe(gulp.dest( prod + 'sections/federal_projects'))
   .pipe(gulpif(isSync, browserSync.stream()));
   done();
}
function infrastructure(done){
   return gulp.src([ base + 'sections/infrastructure/*.jade'] )
   .pipe(jade())
   .pipe(gulp.dest( prod + 'sections/infrastructure' ))
   .pipe(gulpif(isSync, browserSync.stream()));
   done();
}

function styles(){
   return gulp.src( [ src + 'css/style.less' ])
   .pipe(gulpif(isDev, sourcemaps.init()))
   .pipe(less())
   .pipe(gcmq())
   .pipe(autoprefixer())
   .pipe(gulpif(isProd, cleanCSS({
      level: 2
   })))
   .pipe(gulpif(isDev, sourcemaps.write() ))
   .pipe(gulp.dest( dist + 'css'))
   .pipe(gulpif(isSync, browserSync.stream()))
}

function images(done){
   return gulp.src( src + 'images/**/*')
   .pipe(gulpif(isProd, imagemin()))
   .pipe(gulp.dest( dist + 'images'));
   done();
}
function data(done){
   return gulp.src([src + 'data/*', src + 'data/**/*'])
   .pipe(gulp.dest( dist + 'data'));
   done();
}
function fonts(done){
   return gulp.src(src +'fonts/**/*')
   .pipe(gulp.dest( dist + 'fonts'));
   done();
}
function js(done){
   return gulp.src(src + 'js/*.js')
   .pipe(gulpif(isProd, uglify()))
   // .pipe(concat('concat.js'))
   .pipe(gulp.dest( dist + 'js'))
   .pipe(gulpif(isSync, browserSync.stream()));
   done();
}
function js_copy(done){
   return gulp.src([src + 'js/jquery.js', src + 'js/slick.min.js'])
   .pipe(gulpif(isProd, uglify()))
   .pipe(gulp.dest( dist + 'js'));
   done();
}

function clear(){
   return del( prod + '*');
}


function watch(done){
   if(isSync){
      browserSync.init({
         server: {
            baseDir: './build/'
         }
      });
   }
   
   gulp.watch( src + 'css/**/*.less', styles);
   gulp.watch( base + '*.jade', html);
   gulp.watch( src + 'jade/**/*.jade', html);
   gulp.watch( src + 'jade/**/**/*.jade', html);
   gulp.watch( src + 'jade/**/*.jade', federal_projects);
   gulp.watch( src + 'jade/**/*.jade', infrastructure);
   gulp.watch( base + 'sections/federal_projects/*.jade', federal_projects);
   gulp.watch( base + 'sections/infrastructure/*.jade', infrastructure);
   gulp.watch( src + 'images/**/*', images);
   gulp.watch( src + 'data/*', data);
   gulp.watch( src + 'data/**/*', data);
   gulp.watch( src + 'js/*.js', js);
   // gulp.watch( src + 'js/concat/*.js', js);
   done();
}

function grid(done){
   smartgrid( src + 'css/base', gridOptions);
   done();
}

const build_old = gulp.series(clear,
   gulp.parallel(html, styles, js, images, data, fonts )
);
const build = gulp.parallel(html, federal_projects, infrastructure, styles, js, js_copy, images, data, fonts );

gulp.task('build', build);
gulp.task('watch', gulp.series(build, watch));
gulp.task('grid', gulp.parallel(grid));
gulp.task('fonts', fonts);
gulp.task('js', js);
gulp.task('js_copy', js_copy);
gulp.task('data', data);
gulp.task('federal_projects', federal_projects);
gulp.task('infrastructure', infrastructure);
// gulp.task('html_pages', html_pages);
