"use strict";
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
  if(!document.getElementsByClassName) {
    // IE8 support
    var getElementsByClassName = function(node, classname) {
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
        if(re.test(els[i].className))a.push(els[i]);
      return a;
    }
    var videos = getElementsByClassName(document.body, "js-youtube");
  }
  else {
    var videos = document.getElementsByClassName("js-youtube");
  }

  var nb_videos = videos.length;
  for (var i = 0; i < nb_videos; i++) {
    videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].getAttribute('data-id') + '/maxresdefault.jpg)';
    var play = document.createElement("button");
    play.setAttribute("class","youtube__play");
    videos[i].appendChild(play);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var bg = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svg.setAttribute("height","100%");
    svg.setAttribute("version","1.1");
    svg.setAttribute("viewBox","0 0 68 48");
    svg.setAttribute("width","100%");

    bg.setAttribute("class","ytp-large-play-button-bg");
    bg.setAttribute("d","M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z");
    bg.setAttribute("fill","#212121");
    bg.setAttribute("fill-opacity","0.8");

    arrow.setAttribute("d","M 45,24 27,14 27,34");
    arrow.setAttribute("fill","#fff");

    svg.appendChild(bg);
    svg.appendChild(arrow);
    play.appendChild(svg);

    videos[i].firstChild.onclick = function(){
      var then = this.parentNode;
      var iframe = document.createElement("iframe");
      var iframe_url = "https://www.youtube.com/embed/" + then.getAttribute('data-id') + "?autoplay=1&autohide=1";
      if (then.getAttribute("data-params")) iframe_url+='&'+then.getAttribute("data-params");
      iframe.setAttribute("src", iframe_url);
      iframe.setAttribute("class", "youtube__iframe");
      iframe.setAttribute("frameborder",'0');
      then.parentNode.replaceChild(iframe, then);
    }
  }
});
