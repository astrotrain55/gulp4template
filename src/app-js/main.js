import events from 'libs/events';
import Ajax from 'root/common/ajax';
import ready from 'root/common/ready';
import tpl from 'root/common/tpl';
import separationRanks from 'root/common/separationRanks';
import initYouTube from 'components/youtube/youtube';
import { detect as ie } from 'root/common/detectIE';
import { createObjLocationSearch, createStringLocationSearch } from 'root/common/locationSearch';


ready(() => {
  Ajax({
    action: '../ajax/',
    method: 'POST',
    data: {
      request: 'axios',
    },
    success: (json) => {
      console.log(json);
    },
  });

  initYouTube();

  separationRanks.init('.js-ranks');

  const locationSearch = createObjLocationSearch('./?name=es6&extension=js');
  console.log(locationSearch);
  console.log(createStringLocationSearch(locationSearch));
  console.log(events.get());
  console.log(tpl.render({
    people: ['html', 'css', 'javascript'],
  }, 'template'));
  console.log(tpl.get('template'));
  console.log(`Microsoft: ${ie()}`);
});
