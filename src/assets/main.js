import "dialog-polyfill";

import Ajax from "~/common/ajax";
// import "~/common/youtube";
import { createObjLocationSearch, createStringLocationSearch } from '~/common/locationSearch';
import { separationRanks } from '~/common/separationRanks';
import { smoothScroll } from '~/common/smoothScroll';
import { detect as ie } from '~/common/detectIE';


$(document).on('click', '[href="#"]', e => {
  e.preventDefault();
});

smoothScroll();

$(function() {

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
