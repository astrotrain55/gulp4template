import events from 'libs/events';


export default (fn) => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    events.on('DOMContentLoaded', document, fn);
  }
};
