const calculate = ({ total, next, operation }, butName) => {
  const calObj = {
    total,
    next,
    operation,
  };
  switch (butName) {
    case 'AC':
      calObj.total = ''.concat('0');
      calObj.next = '';
      calObj.operation = '';
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
export default calculate;
