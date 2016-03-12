const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
var jetpack  = require('fs-jetpack')
var uglify               = require('gulp-uglify')
//var usemin               = require('gulp-usemin')
//var rev                  = require('gulp-rev')
//var path                 = require('path')
//var run                  = require('gulp-run');



var projectDir = jetpack;
var srcDir     = projectDir.cwd('./app')
var destDir    = projectDir.cwd('./dist')
var packDir    = projectDir.cwd('./packages')


gulp.task('clean', () => {
  return destDir.dirAsync('.', { empty: true })
})

gulp.task('copy', ['clean'], () => {
  return projectDir.copyAsync('app', destDir.path(), {
        overwrite: true, matching: [
            './node_modules/**/*',
            './app/Views/**/*',
            './index.html',
            './main.js',
            './menu.js',
            './package.json'
       ]
    })
})

/*
gulp.task('minify-vendor', ['copy'], () => {
  return gulp.src(path.join(srcDir.path(), 'index.html'))
    .pipe(usemin({
      css: [ rev ],
      js: [ uglify, rev ]
    }))
    .pipe(gulp.dest(destDir.path()))
})
*/
 
gulp.task('build', () => {
  console.log(projectDir.path())
  return gulp.src('src/background.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
})

gulp.task('run', ['clean', 'build'])