const route = require('../routes');


module.exports = function server() {
  $.sync.init({
    // tunnel: 'gulp4webpack',
    // open: 'tunnel',
    proxy: route.server.proxy
  });
};
