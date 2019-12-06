import { Ajax, scroll } from 'libs';
import $ from 'common/tools';
import store from 'root/store';
import tpl from 'components/templates/templates';
import youtube from 'components/youtube/youtube';

$.ready(() => {
  youtube.init();
  console.log(store.total);

  Ajax({
    method: 'post',
    params: { req: 'params' },
    data: {
      request: {
        axios: true,
      },
    },
  }, {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  }, (local, json) => {
    console.log(local);
    document.body.insertAdjacentHTML('beforeend', tpl.render(json, 'template'));
  });

  ev.once('custom:event', document, () => {
    console.log('Event: custom:event');
  });

  ev.emit('custom:event');

  console.log(scroll);
  console.log(ev.get());
  console.log($.getSearch('?q=URLUtils.searchParams&topic=api&topic=webdev').get('q'));
  console.log($.strSearch({
    q: 'URLUtils.searchParams',
    topic: 'webdev',
  }));
});
