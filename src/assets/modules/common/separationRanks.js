// Разделение разрядов числа пробелами
export function separationRanks(number){
  var num = (String(number)) ? String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : number;
  return num;
}
