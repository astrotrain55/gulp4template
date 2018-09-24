import { separationRanks } from './modules/common/separationRanks.js';
import { smoothScroll } from './modules/common/smoothScroll.js';
import { detect as ie } from './modules/common/detectIE.js';
import {fetch as fetchPolyfill} from 'whatwg-fetch';

$('[href="#"]').on('click', function(e){
  e.preventDefault();
});

smoothScroll();

$(function(){
  $('.js-ranks').each(function(){
    var then = $(this),
        text = then.text();
    then.text(separationRanks(text));
  });

  console.log("Microsoft: " + ie());
});

fetchPolyfill('../src/data/menu.json')
  .then((response) => {
    console.log(response.json());
  }, (error) => {
    console.log(error.message);
  });
