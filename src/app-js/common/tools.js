export default {
  el(selector, ctx = document) {
    return ctx.querySelector(selector);
  },

  all(selector, ctx = document) {
    return [...ctx.querySelectorAll(selector)];
  },

  obj(...arObjects) {
    return _.assign(Object.create(null), ...arObjects);
  },

  ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      ev.on('DOMContentLoaded', document, fn);
    }
  },

  deleteQuote(value) {
    if (_.isString(value)) return _.replace(value, /['"]/gi, '');
    return value;
  },

  getNumberOnly(value) {
    return parseInt(_.replace(value, /\D+/g, ''), 10);
  },

  getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  },

  getSearch(str = window.location.search) {
    return new URLSearchParams(str);
  },

  strSearch(obj) {
    return new URLSearchParams(obj).toString();
  },

  formatDateTime(options = {}, date = new Date()) {
    return new Intl.DateTimeFormat('ru', options).format(date);
  },

  toPartsDateTime(options = {}, date = new Date()) {
    return new Intl.DateTimeFormat('ru', options).formatToParts(date);
  },
};
