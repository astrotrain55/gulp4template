## Стартовый шаблон

### Компоненты:
* Сборщик проектов **[Gulp](https://gulpjs.com/) 4**
* Препроцессор **[Pug](https://pugjs.org/)**
* Препроцессор **[Stylus](http://stylus-lang.com/)**
  * Библиотека миксинов **[nib](http://stylus.github.io/nib/)**
  * Сетка **Smartgrid** ([YouTube](https://www.youtube.com/watch?v=KFVoIzaGPYg&list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz))
* Сборщик модулей **[Webpack](https://webpack.js.org/)**
  * Транспайлер **[Babel](https://babeljs.io/)**
  * Шаблонизатор **[{{ mustache }}](http://mustache.github.io/)**
* SVG-спрайты **[gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite)**

### Установка и запуск:
* Клонирование дистрибутива:
```git clone https://github.com/astrotrain55/gulp4template.git```
* ```cd gulp4template/src```
* Если установлен Gulp 3, удаляем:
```[sudo] npm rm gulp gulp-cli -g```
* Установка Gulp 4:
```[sudo] npm i gulp-cheerio -g```
* Ссылка на глобальный cheerio:
```npm link gulp-cheerio```
* Установка зависимостей:
```npm i```
* Запуск:
```npm run go```
