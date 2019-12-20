const calculate = ({ total, next, operation }, butName) => {
  const calObj = {
    total,
    next,
    operation
  };
  switch (butName) {
    case 'AC':
      calObj.total = total.concat('0');
      calObj.next = '';
      calObj.operation = '';
      calObj.total = total.concat('0');
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
