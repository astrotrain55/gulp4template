// Копия массива
export function arrCopy(arr) {
  let arrCopy = arr.map(function(el) {
    return el;
  });
  return arrCopy;
}

// Копия объекта
export function objCopy(obj) {
  let objCopy = {};
  for (let key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

// Количество элементов объекта
export function objCount(obj) {
  let counter = 0;
  for (let key in obj) {
    counter++;
  }
  return counter;
}
