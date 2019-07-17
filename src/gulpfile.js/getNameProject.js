const path = require('path');


module.exports = () => {
  const full = path.resolve(__dirname).split(path.sep);
  full.pop(); // "выходим" из gulpfile.js
  full.pop(); // "выходим" из src
  return full.pop();
};
