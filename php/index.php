<?php require_once("../_template.path.php"); ?><!DOCTYPE html>
<html lang="ru-RU">
  <head>
    <title>Главная страница</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Baryonyx">
    <meta name="copyright" content="<?=date("Y")?>">
    <meta name="theme-color" content="#808">
    <meta name="msapplication-navbutton-color" content="#808">
    <meta name="apple-mobile-web-app-status-bar-style" content="#808">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="ru_RU">
    <meta property="og:url" content="">
    <meta property="og:title" content="Главная страница">
    <meta property="og:site_name" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="<?=SITE_TEMPLATE_PATH?>/images/imageOpenGraph.png">
    <link rel="icon" href="<?=SITE_TEMPLATE_PATH?>/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="<?=SITE_TEMPLATE_PATH?>/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="<?=SITE_TEMPLATE_PATH?>/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?=SITE_TEMPLATE_PATH?>/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?=SITE_TEMPLATE_PATH?>/apple-touch-icon-114x114.png">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/vendor.min.css?v=<?=rand()?>">
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/template_styles.css?v=<?=rand()?>"><!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/rem/1.3.4/js/rem.min.js"></script><![endif]-->
  </head>
  <body style="height:3100px;"><?php require_once("../images/svg/symbols.svg"); ?>
    <div class="l-page main-page" id="top">
      <div class="l-container">
        <header class="header">
          <div class="l-wrapper">
            <nav>
              <ul>
                <li><a href="index.php">
                    <button>Главная страница</button></a></li>
                <li><a href="02.php">
                    <button>Внутренняя страница</button></a></li>
                <li><a href="#footer">
                    <button>Вниз</button></a></li>
              </ul>
            </nav>
          </div>
        </header>
        <div class="banner">
          <div class="l-wrapper"><img src="http://placeimg.com/1366/768/any" alt="picture"/>
          </div>
        </div>
        <main class="l-content">
        </main>
      </div>
      <footer class="footer" id="footer">
        <div class="l-wrapper"></div><a class="scroll-top" href="#top">
          <button type="button">
            <svg class="icon icon-arrow-up scroll-top__icon">
              <use xlink:href="#arrow-up"></use>
            </svg>
          </button></a>
      </footer>
    </div>
    <div id="templates">
      <script type="text/html" title="template"><ul>
  <li><%= title %></li>
</ul>

      </script>
    </div>
    <script src="<?=SITE_TEMPLATE_PATH?>/vendor.min.js?v=<?=rand()?>"></script>
    <script src="<?=SITE_TEMPLATE_PATH?>/scripts.min.js?v=<?=rand()?>"></script><?php require_once("../widget/_widget.inc.php"); ?>
  </body>
</html>