// deprecated
// https://developer.mozilla.org/ru/docs/Web/API/URLSearchParams

import _ from 'libs/lodash';


function createStringLocationSearch(obj = {}, stringAddress = '') {
  const address = (_.isString(stringAddress) && stringAddress) ? stringAddress : '';

  const array = _.map(obj, (item, key) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`);

  return `${address}?${array.join('&')}`;
}

function createObjLocationSearch(stringUrl) {
  let src = window.location.search;

  if (stringUrl) {
    src = '';
    if (_.isString(stringUrl) && stringUrl) {
      const index = stringUrl.indexOf('?');
      if (index !== -1) src = stringUrl.substr(index);
    }
  }

  return src.substr(1).split('&').reduce((a, i) => {
    const array = i.split('=');
    if (array[0]) a[decodeURIComponent(array[0])] = decodeURIComponent(array[1]);
    return a;
  }, {});
}

export {
  createStringLocationSearch,
  createObjLocationSearch,
};
