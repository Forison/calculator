import operate from './operate';

const calculate = ({ total, next, operation }, butName) => {
  const calObj = {
    total,
    next,
    operation,
  };
  const calcul = () => {
    switch (butName) {
      case 'AC':
        calObj.total = ''.concat('0');
        calObj.next = '';
        calObj.operation = null;
        break;
      case '+/-':
        calObj.total = calObj.total === '' || calObj.total === '0' ? calObj.total : calObj.total = `${total * -1}`;
        calObj.next = calObj.next === '' || calObj.next === '0' ? calObj.next : calObj.next = `${next * -1}`;
        break;
      case '+':
      case '-':
      case 'x':
      case '÷':
      case '%':
        calObj.operation = butName;
        break;
      case '=':
        return total;

      default:
        return calObj;
    }
    return calObj;
  };
  if (['-', '+'].includes(butName)) {
    return calcul(calObj, butName);
  }
  if (butName === '=') {
    calObj.total = operate(total, next, operation);
    calObj.next = '';
    calObj.operation = null;
  } else if (butName === '+/-') {
    return calcul(calObj, butName);
  } else if (butName === 'AC') {
    return calcul(calObj, butName);
  } else if (['x', '÷'].includes(butName)) {
    return calcul(calObj, butName);
  } else if (butName === '%') {
    calObj.total = operate(total, next, butName);
    calObj.next = '';
    calObj.operation = null;
  } else {
    if (next === '' && total.length >= 2 && operation === null) {
      calObj.total = calObj.total.concat(butName);
    }
    if (next === '' && total.length === 1 && operation === null) {
      calObj.total = calObj.total.concat(butName);
    }
    if (next === '' && total !== '' && operation !== null && operation !== '') {
      calObj.next = calObj.next.concat(butName);
    }
    if (next !== '' && total !== '' && operation !== null && operation !== '') {
      calObj.next = calObj.next.concat(butName);
    }
  }
  return calObj;
};
export default calculate;
