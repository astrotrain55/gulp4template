import _ from 'libs/lodash';


// Разделение разрядов числа пробелами
const separationRanks = {

  separation(number) {
    return (String(number)) ? _.replace(String(number), /(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : number;
  },

  init(selector) {
    _.each(document.querySelectorAll(selector), (el) => {
      const elem = el;
      elem.textContent = this.separation(elem.textContent);
    });
  },

};

export default separationRanks;
