## Стартовый шаблон

### Компоненты:
* **[Gulp](https://gulpjs.com/) 4**
* **[Pug](https://pugjs.org/)**
* **[Stylus](http://stylus-lang.com/)**
  * Библиотека миксинов **[nib](http://stylus.github.io/nib/)**
  * Сетка **Smartgrid** ([YouTube](https://www.youtube.com/watch?v=KFVoIzaGPYg&list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz))
* **[Webpack](https://webpack.js.org/) 4**
  * **[Babel](https://babeljs.io/)**
  * **[JSHint](https://jshint.com/)**
  * **[MobX](https://mobx.js.org/)**
  * **[EJS](https://ejs.co/)**
  * **[{{ mustache }}](https://github.com/janl/mustache.js)**
* Ajax **[axios](https://github.com/axios/axios)**
* Слайдер **[Swiper](https://idangero.us/swiper/)**
* SVG-спрайты **[gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite)**

### Установка:
* ```mkdir projectName```
* ```cd projectName```
* ```git clone https://github.com/astrotrain55/gulp4webpack.git .```
* ```cd ./src```
* Если установлен Gulp 3, удаляем: ```[sudo] npm rm -g gulp```
* ```[sudo] npm i -g gulp-cli rimraf gulp-cheerio```
* ```npm i```
* ```[sudo] npm link gulp-cheerio```

### Команды:
* Запустить проект ```npm run go```
* Сгенерировать сетку ```npm run grid```
* Создать компоненты ```npm run create компонент1 компонент2 ... компонентN```
* Удалить node_modules ```npm run delete```
* Очистить кэш ```npm run clear```
