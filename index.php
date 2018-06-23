<!DOCTYPE html>
<html lang="ru-RU">
  <head>
    <title>Проект</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <style>
      html,
      body,
      main {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      body {
        display: table;
      }
      main {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
      }
      section {
        display: inline-block;
      }
      ol {
        text-align: left;
        font-family: sans-serif;
        font-size: 18px;
        line-height: 1.5;
        list-style-type: none;
        counter-reset: counter;
      }
      li:before {
        counter-increment: counter;
        content: counter(counter, decimal-leading-zero) ".";
        color: #668a97;
      }
      a {
        text-decoration: none;
        color: inherit;
        border-bottom: 1px solid;
        transition: opacity .5s;
      }
      a:hover {
        opacity: .6;
      }
    </style>
  </head>
  <body>
    <main>
      <section>
        <ol>
          <li>
            <a href="php/">Главная</a>
          </li>
          <li>
            <a href="php/02.php">Внутренняя</a>
          </li>
        </ol>
      </section>
    </main>
  </body>
</html>
