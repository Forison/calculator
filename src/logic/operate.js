import big from 'big.js';
const operate = (numberOne, numberTwo, operation) => {
    let results;
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
            results = numberTwo === 0 ? 'undefined' : big(numberOne).div(numberTwo).toString()
            break;
        case '%':
            results = big(numberOne).div(100).toString();
            break;
        default:
            results = 'invalid operator'
            break;
    }
    return results
}
export default operate;