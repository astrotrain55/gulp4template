import 'dialog-polyfill';

import Ajax from 'root/common/ajax';
import { createObjLocationSearch, createStringLocationSearch } from 'root/common/locationSearch';
import { separationRanks } from 'root/common/separationRanks';
import { detect as ie } from 'root/common/detectIE';
import { initYouTube  } from 'components/youtube/youtube';


function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

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

});
