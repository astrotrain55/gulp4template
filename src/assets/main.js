// Плавный скролл
$('a[href^="#"]').on('click', function(e){
  e.preventDefault();
  var elementClick = $(this).attr('href'),
      destination  = $(elementClick).offset().top;
  $('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 2000, 'swing');
});

// Разделение разрядов числа пробелами
function separationRanks(number){
  var num = (String(number)) ? String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : number;
  return num;
}

$(function(){
  $('[href="#"]').on('click', function(e){
    e.preventDefault();
  });
  $('.js-ranks').each(function(){
    var then = $(this),
        text = then.text();
    then.text(separationRanks(text));
  });
});
