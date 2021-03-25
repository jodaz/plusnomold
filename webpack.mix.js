const mix = require('laravel-mix');
const { MIX_PROXY_URL } = process.env;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js/app.js')
  .css('resources/css/app.css', 'public/js/app.css')
  .react()
  .browserSync({
    files: [
      'public/js/**/*',
      'public/css/**/*',
    ],
    proxy: `${MIX_PROXY_URL}`,
    open: true
  });

if (mix.inProduction()) {
  mix.version();
}
