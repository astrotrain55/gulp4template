import events from 'eventslibjs';

function wrapper(name, event, target, fn) {
  events[name](event, target, (e) => {
    const currentTarget = _.isString(target) ? e.target.closest(target) : target;
    fn(e, currentTarget);
  });
}

export default {
  on: (...args) => { wrapper('on', ...args); },
  once: (...args) => { wrapper('once', ...args); },
  off: events.off,
  get: events.get,
};
