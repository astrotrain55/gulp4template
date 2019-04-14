// import dialogPolyfill from 'dialog-polyfill';
// dialogPolyfill.registerDialog(document.querySelector('dialog'));

import Ajax from 'root/common/ajax';
import ready from 'root/common/ready';
import render from 'root/common/render';
import { createObjLocationSearch, createStringLocationSearch } from 'root/common/locationSearch';
import { separationRanks } from 'root/common/separationRanks';
import { detect as ie } from 'root/common/detectIE';
import { initYouTube  } from 'components/youtube/youtube';


ready(() => {

  Ajax({
    action: '../ajax/',
    method: 'POST',
    data: {request: 'axios'},
    success: json => {
      console.log(json);
    }
  });

  initYouTube();

  separationRanks.init('.js-ranks');

  const locationSearch = createObjLocationSearch('./?name=es6&extension=js');
  console.log(locationSearch);
  console.log(createStringLocationSearch(locationSearch));
  console.log(`Microsoft: ${ ie() }`);
  console.log(render('.js-templates--ejs', {
    people: ['geddy', 'neil', 'alex']
  }));

});
