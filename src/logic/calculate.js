import operate from './operate';

const calculate = ({ total, next, operation }, butName) => {
  const calObj = {
    total,
    next,
    operation,
  };
  const calObjMutator = () => {
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
      case '√':
      case 'Exp':
        calObj.operation = butName;
        break;
      case '=':
        return total;
      default:
        return calObj;
    }
    return calObj;
  };

  if (butName === '=') {
    calObj.total = operate(total, next, operation);
    calObj.next = '';
    calObj.operation = null;
  } else if (butName === '+/-') {
    return calObjMutator(calObj, butName);
  } else if (butName === 'AC') {
    return calObjMutator(calObj, butName);
  } else if (['x', '÷', '-', '+', '√', 'Exp'].includes(butName)) {
    return calObjMutator(calObj, butName);
  } else if (['x!'].includes(butName)) {
    if (calObj.operation === null) {
      calObj.total = calObj.total.concat('!')
    } else {
      calObj.next = calObj.next.concat('!')
    }
    return calObjMutator(calObj, butName);
  }
  else if (butName === '%') {
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
    if (next === '' && total !== '' && operation !== null) {
      calObj.next = calObj.next.concat(butName);
    }
    if (next !== '' && total !== '' && operation !== null) {
      calObj.next = calObj.next.concat(butName);
    }
    if (next === '' && total === 'undefined' && operation === null) {
      calObj.total = butName;
    }
    if (next === '' && total === '0' && operation === null) {
      calObj.total = butName;
    }
  }
  return calObj;
};
export default calculate;
