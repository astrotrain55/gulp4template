import Ajax from 'root/common/ajax';
import ready from 'root/common/ready';
import render from 'root/common/render';
import separationRanks from 'root/common/separationRanks';
import { initYouTube } from 'components/youtube/youtube';
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
  console.log(`Microsoft: ${ie()}`);
  console.log(render('.js-templates', {
    people: ['html', 'css', 'javascript'],
  }));
});
