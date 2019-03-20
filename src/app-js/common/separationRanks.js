// Разделение разрядов числа пробелами
function separationRanks(number){
  return (String(number)) ? String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : number;
}

export {separationRanks};
