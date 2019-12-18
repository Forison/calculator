const calculate = ({ total, next, operation }, butName) => {
	const calObj = {
		total: total,
		next: next,
		operation: operation
	}
	switch (butName) {
		case 'AC':
			calObj.total = '';
			calObj.next = '';
			calObj.operation = '';
			break;
		case '+/-':
			calObj.total = calObj.total * -1;
			calObj.next = calObj.next * -1;
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
			return calObj
	}
	return calObj;
}
export default calculate;