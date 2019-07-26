import _ from 'libs/lodash';


class Tpl {
  constructor() {
    this.private = {
      templates: document.querySelector('#templates'),
    };
  }

  get(name) {
    let markup = '';
    if (_.isString(name) && Boolean(name)) {
      const el = this.private.templates.querySelector(`[type="text/template"][data-name="${name}"]`);
      markup = _.trim(el.textContent);
    }
    return markup;
  }

  render(state, template) {
    const markup = this.get(template);
    const compiled = _.template(markup);
    const data = _.assign({ _ }, state);
    return compiled(data);
  }
}

const tpl = new Tpl();

export default tpl;
