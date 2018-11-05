window.onload = function(){
  $.getJSON('../json/data.json', function(data){
    var e = $(".jsWidgetTemplate").html();
    var m = Mustache.render(e, data);
    $('body').append(m);
  });
}
