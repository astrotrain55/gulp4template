// Плавный скролл
export function smoothScroll(el = 'a[href^="#"]', time = 2000){
  $(el).on('click', function(e){
    e.preventDefault();
    var elementClick = $(this).attr('href'),
        destination  = $(elementClick).offset().top;
    $('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, time, 'swing');
  });
}
