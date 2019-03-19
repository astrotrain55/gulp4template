## Стартовый шаблон

### Компоненты:
* Сборщик проектов **[Gulp](https://gulpjs.com/) 4**
* Препроцессор **[Pug](https://pugjs.org/)**
* Препроцессор **[Stylus](http://stylus-lang.com/)**
  * Библиотека миксинов **[nib](http://stylus.github.io/nib/)**
  * Сетка **Smartgrid** ([YouTube](https://www.youtube.com/watch?v=KFVoIzaGPYg&list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz))
* Сборщик модулей **[Webpack](https://webpack.js.org/) 4**
  * Транспайлер **[Babel](https://babeljs.io/)**
  * Проверка кода **[JSHint](https://jshint.com/)**
  * Шаблонизатор **[{{ mustache }}](http://mustache.github.io/)**
* SVG-спрайты **[gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite)**

### Установка и запуск:
* Клонирование дистрибутива:
```git clone https://github.com/astrotrain55/gulp4webpack.git```
* ```cd gulp4webpack/src```
* Если установлен Gulp 3, удаляем:
```[sudo] npm rm -g gulp```
* Установка Gulp 4:
```[sudo] npm i -g gulp-cli gulp-cheerio```
* Установка зависимостей:
```npm i```
* Ссылка на глобальный cheerio:
```npm link gulp-cheerio```
* Запуск:
```npm run go```
