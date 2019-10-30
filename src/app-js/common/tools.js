import { e } from 'libs';

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
      e.on('DOMContentLoaded', document, fn);
    }
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
