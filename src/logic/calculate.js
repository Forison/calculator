const calculate = ({ total, next, operation }, butName) => {
  const calObj = {
    total,
    next,
    operation
  };
  switch (butName) {
    case 'AC':
      calObj.total = '0';
      calObj.next = '';
      calObj.operation = '';
      break;
    case '+/-':
      calObj.total = '-' + total;
      calObj.next = '-' + next;
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
