// Плавный скролл
$('[data-scroll]').click(function(){
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 2000);
  return false;
});

$(function(){
  
});
