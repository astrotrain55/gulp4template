const path = require('path');


module.exports = () => {
  let full = path.resolve(__dirname).split(path.sep);
  full.pop(); // "выходим" из gulprc
  full.pop(); // "выходим" из src
  return full.pop();
}
