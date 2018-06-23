<style>
  .Widget__wrap {
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
  .Widget__wrap:after {
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
  .Widget__wrap:hover {
    transform: translate(0,0);
  }
  .Widget__item {
    padding: 0 0 10px;
  }
  .Widget__link {
    color: #fff;
    text-decoration: none;
    font-size: 15px;
  }
  .Widget__link:hover {
    text-decoration: underline;
  }
</style>

<div class="Widget__wrap">
  <ul class="Widget__list"></ul>
</div>

<script>
  function Widget(){
    var pages = ['index','02'];
    this.run = function(){
      for (var i = 0; i < pages.length; i++) {
        $('<li class="Widget__item"><a class="Widget__link" href="' + pages[i] + '.php' + '">' + pages[i] + '</a></li>').appendTo('.Widget__list');
      }
    }
  }

  window.onload = function(){
    var pageWidget = new Widget();
    pageWidget.run();
  }
</script>
