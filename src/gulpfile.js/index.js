'use strict';

global.$ = {
  sync: require('browser-sync').create(),
};

const { series, parallel, watch } = require('gulp');
const { clearAll } = require('gulp-cache');
const route = require('./routes');

// tasks
const php = require('./tasks/pug');
const css = require('./tasks/stylus');
const js = require('./tasks/js');
const vendor = require('./tasks/vendor');
const server = require('./tasks/server');
const svg = require('./tasks/svg');
const sprite = require('./tasks/sprite');

exports.default = series(
  parallel(clearAll),
  parallel(php, css, js, vendor, svg, sprite),
  parallel(server, observer)
);

function grid(done) {
  delete require.cache[require.resolve(route.grid.settings)];
  const settings = require(route.grid.settings);
  const smartgrid = require('smart-grid');
  smartgrid(route.grid.output, settings);
  done();
}

function observer() {
  watch(route.watch.pug, php);
  watch(route.watch.styl, css);
  watch(route.watch.vendor, vendor);
  watch(route.watch.js, js);
  watch(route.watch.sprite, sprite);
  watch(route.watch.svg, svg);
  watch(route.grid.watch, grid);
}
