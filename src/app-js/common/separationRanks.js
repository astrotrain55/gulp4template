import dom from 'root/common/dom';

// Разделение разрядов числа пробелами
const separationRanks = {

  separation(number) {
    return (String(number)) ? String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : number;
  },

  init(selector) {
    dom.all(document.querySelectorAll(selector), el => {
      el.textContent = this.separation(el.textContent);
    });
  }

};

export {separationRanks};
