import { Ajax, e } from 'libs';
import $ from 'common/tools';
import store from 'root/store';
import tpl from 'components/templates/templates';
import youtube from 'components/youtube/youtube';

$.ready(() => {
  youtube.init();
  console.log(store.total);

  Ajax({
    method: 'get',
    params: { req: 'params' },
    data: { request: 'axios' },
  }, {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  }).then(([local, json]) => {
    console.log(local);
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
