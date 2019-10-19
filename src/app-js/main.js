import { Ajax, e } from 'libs';
import $ from 'common/tools';
import tpl from 'components/templates/templates';
import initYouTube from 'components/youtube/youtube';

$.ready(() => {
  Ajax({
    data: { request: 'axios' },
  }, (json) => {
    console.log(json);
  });

  Ajax({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  }, (json) => {
    document.body.insertAdjacentHTML('beforeend', tpl.render(json, 'template'));
  });

  initYouTube();

  console.log(e.get());
  console.log($.getSearch('topic', '?q=URLUtils.searchParams&topic=api&topic=webdev'));
  console.log($.strSearch({
    q: 'URLUtils.searchParams',
    topic: 'webdev',
  }));
});
