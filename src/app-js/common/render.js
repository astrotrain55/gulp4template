import _ from 'libs/lodash';


export default (selector, state) => {
  const templates = document.getElementById('templates');
  const tpl = templates.querySelector(selector).textContent;
  const compiled = _.template(tpl);
  return _.trim(compiled(state));
};
