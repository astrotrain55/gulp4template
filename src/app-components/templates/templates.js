import $ from 'common/tools';

class Tpl {
  constructor() {
    this.private = {
      templates: $.el('#templates'),
    };
  }

  get(name) {
    let markup = '';
    if (_.isString(name) && Boolean(name)) {
      const el = $.el(`[title="${name}"]`, this.private.templates);
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
