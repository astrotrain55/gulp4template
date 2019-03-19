const fs = require('fs');


if (process.argv[2]) {

  process.argv.forEach((arg, i) => {
    if (i >= 2) {

      let prefix = 'gpn-';
      let name   = (process.argv[i]) ? `${process.argv[i]}` : '';
      let folder = `./assets/bem/${name}/`;
      let files  = [
        {
          dir: folder,
          name: name,
          extension: 'styl',
          text: `.${name}\r  // &__`
        },
        {
          dir: folder,
          name: name,
          extension: 'pug',
          text: `mixin ${name}()\r  .${name}\r    `
        }
      ]

      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
        files.forEach(file => {
          createFile(getFullPath(file), file.text);
        });
      } else { console.log(`Модуль ${name} уже есть`); }

    }
  });

} else {
  console.log(`Введите названия модулей:
    npm run create module-name module-name module-name`);
}

function createFile(filename, content) {
  fs.writeFile(filename, content, error => {
    if (error) {
      return console.log(error);
    }
    console.log(`create ${filename}`);
  });
}

function getFullPath(file) {
  return `${file.dir}${file.name}.${file.extension}`
}
