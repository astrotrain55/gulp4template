const route = require('../routes');

module.exports = function server() {
  $.sync.init({
    // tunnel: 'gulp4webpack',
    // open: 'tunnel',
    open: false,
    proxy: route.server.proxy
  });
};
