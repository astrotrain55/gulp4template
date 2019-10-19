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

  setSearch(key, name, str = window.location.search) {
    return new URLSearchParams(str).set(key, name);
  },

  getSearch(key, str = window.location.search) {
    return new URLSearchParams(str).get(key);
  },

  delSearch(key, str = window.location.search) {
    return new URLSearchParams(str).del(key);
  },

  hasSearch(key, str = window.location.search) {
    return new URLSearchParams(str).has(key);
  },

  strSearch(obj) {
    return new URLSearchParams(obj).toString();
  },
};
