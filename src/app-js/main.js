import { Ajax, e } from 'libs';
import $ from 'common/tools';
import store from 'root/store';
import tpl from 'components/templates/templates';
import youtube from 'components/youtube/youtube';

$.ready(() => {
  youtube.init();
  console.log(store.total);

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

  e.once('custom:event', document, () => {
    console.log('Event: custom:event');
  });

  e.emit('custom:event');

  console.log(e.get());
  console.log($.getSearch('?q=URLUtils.searchParams&topic=api&topic=webdev').get('q'));
  console.log($.strSearch({
    q: 'URLUtils.searchParams',
    topic: 'webdev',
  }));
});
