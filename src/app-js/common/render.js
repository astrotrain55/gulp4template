import ejs from 'ejs';


export default (selector, data) => {
  const templates = document.querySelector('.js-templates'),
        template  = templates.querySelector(selector).textContent;
  return ejs.render(template.trim(), data);
};
