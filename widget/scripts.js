$.getJSON('../json/data.json', function(data) {
  var e = $(".jsWidgetTemplate").text();
  var m = Mustache.render(e, data);
  $('body').append(m);
});
