export function addComma(num) {
  var str = num.toString().split('.');
  if (str[0].length >= 4) { //era >=5 antes
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1.');
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return str.join('.');
}

export const Soma = array => {
  return array.reduce((partialSum, a) => partialSum + a, 0);
};

export const Percentual = (item, total) => {
  return Math. ceil((item/total) * 100);
};

export default { addComma, Soma, Percentual };