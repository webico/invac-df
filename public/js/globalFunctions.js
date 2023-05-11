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

export function checkPreenchido(props) {
  let chaves;

  // if(!vacinaTrue) {
  chaves = {
    ...props
  };
  // } else if() {
  //   chaves = {
  //     ...props, tipoVacina
  //   };
  // }

  // if (!(vacinaTrue && tipoVacina.length)) {
  //   chaves = {
  //     ...props
  //   };
  // } else {
  //   chaves = {
  //     ...props, tipoVacina
  //   };
  // }


  return Object.values(chaves).every(item => item);
}

export default { addComma, checkPreenchido };