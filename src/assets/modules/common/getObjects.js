// Копия массива
export function arrCopy(arr) {
  var arrCopy = arr.map(function(el) {
    return el;
  });
  return arrCopy;
}

// Копия объекта
export function objCopy(obj) {
  var objCopy = {};
  for (var key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

// Количество элементов объекта
export function objCount(obj) {
  var counter = 0;
  for (var key in obj) {
    counter++;
  }
  return counter;
}
