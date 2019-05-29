import events from 'eventslibjs';


export default (fn) => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    events.on('DOMContentLoaded', document, fn);
  }
};
