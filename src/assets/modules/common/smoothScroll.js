// Плавный скролл
export function smoothScroll(el = 'a[href^="#"]', to = 'href', time = 2000){
  $(el).on('click', function(e){
    e.preventDefault();
    let elementClick = $(this).attr(to),
        destination  = $(elementClick).offset().top;
    $('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, time, 'swing');
  });
}
