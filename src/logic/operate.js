import big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let results;
  const handleE = () => {
    if (numberOne === 'e') {
      numberOne = Math.E;
    }
    if (numberOne.length > 1 && numberOne.includes('e')) {
      numberOne = numberOne.split('e').join('');
      numberOne = numberOne * Math.E
    }
    if (numberTwo.length > 1 && numberTwo.includes('e')) {
      numberTwo = numberTwo.split('e').join('');
      numberTwo = numberTwo * Math.E
    }
    if (numberTwo === 'e') {
      numberTwo = Math.E;
    }
  }
  const handlePie = () => {
    if (numberOne === 'π') {
      numberOne = Math.PI;
    }
    if (numberOne.length > 1 && numberOne.includes('π')) {
      numberOne = numberOne.split('π').join('');
      numberOne = numberOne * Math.PI
    }
    if (numberTwo.length > 1 && numberTwo.includes('π')) {
      numberTwo = numberTwo.split('π').join('');
      numberTwo = numberTwo * Math.PI
    }
    if (numberTwo === 'π') {
      numberTwo = Math.PI;
    }
  }

  handleE();
  handlePie();
  if (numberOne === 'undefined' || numberTwo === 'undefined') {
    results = 'undefined';
  } else {
    switch (operation) {
      case '+':
        results = big(numberOne).plus(numberTwo).toString();
        break;
      case '-':
        results = big(numberOne).minus(numberTwo).toString();
        break;
      case 'x':
        results = big(numberOne).times(numberTwo).toString();
        break;
      case '÷':
        results = numberTwo === '0' ? 'undefined' : big(numberOne).div(numberTwo).toString();
        break;
      case '%':
        results = big(numberOne).div(100).toString();
        break;

      case 'tan':
        results = big(numberOne * Math.tan(numberTwo)).toString();
        break;
      case 'cos':
        results = big(numberOne * Math.cos(numberTwo)).toString();
        break;
      case 'sin':
        results = big(numberOne * Math.sin(numberTwo)).toString();
        break;
      case '√':
        results = big(numberOne * Math.sqrt(numberTwo)).toString();
        break;
      case 'log':
        results = big(numberOne * Math.log(numberTwo)).toString();
        break;
      case 'Exp':
        results = big(Math.pow(numberOne, numberTwo)).toString();
        break;
      case '=':
        results = big(numberOne).toString();
        break;

      default:
        results = big(numberOne).toString();
        break;
    }
  }
  return results;
};
export default operate;
