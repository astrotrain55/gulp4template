export default {
  format(options = {}, date = new Date()) {
    return new Intl.DateTimeFormat('ru', options).format(date);
  },

  toParts(options = {}, date = new Date()) {
    return new Intl.DateTimeFormat('ru', options).formatToParts(date);
  },
};
