function createStringLocationSearch(obj = {} /*, string address */) {
  const array = [];
  const address = (typeof arguments[1] === 'string' && arguments[1]) ? arguments[1] : '';

  for (let key in obj) {
    array.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
  }

  return `${address}?${array.join('&')}`;
}

function createObjLocationSearch(/* string params */) {
  let src = window.location.search;

  if (arguments.length) {
    src = '';
    const stringUrl = arguments[0];
    if (typeof stringUrl === 'string' && stringUrl) {
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
