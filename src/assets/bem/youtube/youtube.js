(function(){
  var i, c, y, v, n;
  v = document.getElementsByClassName("youtube");
  for(n = 0; n < v.length; n++){
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
    i.setAttribute("class", "youtube__thumb");
    c = document.createElement("div");
    c.setAttribute("class", "youtube__play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function(){
      var a = document.createElement("iframe");
      a.setAttribute("class", "relation__content");
      a.setAttribute("allowfullscreen", "");
      a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&wmode=opaque&enablejsapi=1&showinfo=0");
      this.parentNode.replaceChild(a, this);
    }
  }
})();
