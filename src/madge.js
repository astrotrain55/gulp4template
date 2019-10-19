const madge = require('madge');


madge('./app-js/main.js', {
  webpackConfig: './webpack.config.js',
  nodeShape: 'component',
  fontSize: '10px'
}).then(res => {
  res.image('./graph.svg');
  console.log(res.circular());
});
