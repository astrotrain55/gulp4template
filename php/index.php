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
    <link rel="stylesheet" href="<?=SITE_TEMPLATE_PATH?>/ie/ie.css">
    <script src="<?=SITE_TEMPLATE_PATH?>/ie/html5shiv.min.js"></script>
    <script src="<?=SITE_TEMPLATE_PATH?>/ie/respond.min.js"></script>
    <script src="<?=SITE_TEMPLATE_PATH?>/ie/rem.min.js"></script><![endif]-->
  </head>
  <body><?php require_once("../images/svg/symbols.svg"); ?>
    <div class="page main-page" id="top">
      <div class="container">
        <header class="header">
          <div class="wrapper">
            <nav>
              <ul>
                <li><a href="index.php">Главная страница</a></li>
                <li><a href="02.php">Внутренняя страница</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main class="content"></main>
      </div>
    </div>
    <script type="text/x-mustache-template"></script>
    <script src="<?=SITE_TEMPLATE_PATH?>/vendor.min.js?v=<?=rand()?>"></script>
    <script src="<?=SITE_TEMPLATE_PATH?>/scripts.min.js?v=<?=rand()?>"></script><?php require_once("../widget/_widget.inc.php"); ?>
  </body>
</html>