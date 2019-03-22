import "dialog-polyfill";

import Ajax from "root/common/ajax";
import { createObjLocationSearch, createStringLocationSearch } from 'root/common/locationSearch';
import { separationRanks } from 'root/common/separationRanks';
import { smoothScroll } from 'root/common/smoothScroll';
import { detect as ie } from 'root/common/detectIE';
import { initYouTube  } from "components/youtube/youtube";


$(document).on('click', '[href="#"]', e => {
  e.preventDefault();
});

smoothScroll();

$(function() {

  initYouTube();

  $('.js-ranks').each((i, item) => {
    let text = $(item).text();
    $(item).text(separationRanks(text));
  });

  const locationSearch = createObjLocationSearch('./?name=es6&extension=js');
  console.log(locationSearch);
  console.log(createStringLocationSearch(locationSearch));
  console.log(`Microsoft: ${ ie() }`);

});

Ajax({
  action: '../src/data/menu.json',
  success: json => {
    console.log(json);
  }
});
