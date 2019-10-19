const { resolve, sep } = require('path');

module.exports = () => {
  const full = resolve(__dirname).split(sep);
  full.pop(); // "выходим" из gulpfile.js
  full.pop(); // "выходим" из src
  return full.pop();
};
