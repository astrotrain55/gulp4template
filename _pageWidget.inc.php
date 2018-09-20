<style>
  .WidgetWrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    padding: 10px 20px;
    background-color: #222;
    border-bottom-right-radius: 10px;
    transition: all .3s ease;
    transform: translate(-100%,0);
  }
  .WidgetWrap:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 100%;
    width: 24px;
    height: 24px;
    background-color: #222;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
  .WidgetWrap:hover {
    transform: translate(0,0);
  }
  .WidgetWrap li {
    padding: 0 0 10px;
  }
  .WidgetWrap a {
    color: #fff;
    text-decoration: none;
    font-size: 15px;
  }
  .WidgetWrap a:hover {
    text-decoration: underline;
  }
</style>

<div class="js-Widget-template" type="text/x-mustache-template" hidden>
  <div class="WidgetWrap">
    <ul>
      {{#.}}
      <li>
        <a href="{{link}}">{{number}}. {{name}}</a>
      </li>
      {{/.}}
    </ul>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.0/mustache.min.js"></script>
<script>
  window.onload = function(){
    $.getJSON('../src/data/menu.json', function(data){

      var a = [], c = 0;
      for (var k in data.top) {
        var o = {};
        o.name = k;
        o.link = data.top[k];
        o.number = ("0" + ++c).slice(-2)
        a.push(o);
      }

      a.push({
        name: "Тестовая страница",
        link: "tmp.php",
        number: "99"
      });

      var e = $(".js-Widget-template").html();
      var m = Mustache.render(e, a);
      $('body').append(m);
    });
  }
</script>
