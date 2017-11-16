var smartgrid = require('smart-grid');

var settings = {
  filename: "_smartgrid.inc",
  outputStyle: 'styl',
  columns: 24,
  offset: '2%',
  mobileFirst: false,
  container: {
    maxWidth: '1100px',
    fields: '30px' /* side fields */
  },
  breakPoints: {
    w700: {
      width: '700px',
      fields: '15px' /* set fields only if you want to change container.fields */
    }
  },
  mixinNames: {
    size: "col-size"
  },
  tab: "  "
};

smartgrid('./assets/', settings);