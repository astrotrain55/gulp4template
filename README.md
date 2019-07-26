## gulp4webpack

### Стартовый шаблон

#### HTML и CSS:
* [Pug](https://pugjs.org/)
* [Stylus](http://stylus-lang.com/) ([nib](http://stylus.github.io/nib/))
* [Smartgrid](https://github.com/dmitry-lavrik/smart-grid) ([YouTube](https://www.youtube.com/watch?v=KFVoIzaGPYg&list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz))

#### JS:
* [ESLint](https://eslint.org/) ([Style Guide](https://github.com/leonidlebedev/javascript-airbnb))
* [Babel](https://babeljs.io/)
* [Lodash](https://lodash.com/)
* [axios](https://github.com/axios/axios)
* [MobX](https://mobx.js.org/)
* [jQuery](https://jquery.com/)

#### Компоненты:
* [Gulp](https://gulpjs.com/) 4
* [Webpack](https://webpack.js.org/) 4
* [Swiper](https://idangero.us/swiper/)
* [svg-sprite](https://github.com/jkphl/svg-sprite)
* [Material Components](https://material.io/develop/web/)

#### Установка:
```bash
mkdir имя_проекта && cd имя_проекта

git clone https://github.com/astrotrain55/gulp4webpack.git .

cd ./src

[sudo] npm i -g gulp-cli rimraf

npm i && npm i --no-save gulp-cheerio@^0.6.3
```

#### Команды:
```bash
# Запустить проект:
npm run go

# Создать компоненты:
npm run create компонент1 компонент2 ... компонентN

# Удалить node_modules:
npm run delete

# Искать списком:
npm run list строка

# Искать подробно:
npm run full строка
```

#### Полезные пакеты, отсутствующие в сборке:
* ion-rangeslider
* jquery-file-upload
* jquery-mask-plugin
* jquery-validation
* magnific-popup
* masonry-layout
* mmenu-js
* particles.js
* progressbar.js
* pure-swipe
