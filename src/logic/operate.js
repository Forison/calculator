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
  const fib = (num) => {
    if (num === 1) {
      return 1;
    }
    else {
      return num * fib(num - 1);
    }
  };
  const handleFac = () => {
    if (numberOne.length > 1 && numberOne.includes('!')) {
      numberOne = numberOne.split('!').join('');
      numberOne = fib(numberOne)
    }
    if (numberTwo.length > 1 && numberTwo.includes('!')) {
      numberTwo = numberTwo.split('!').join('');
      numberTwo = fib(numberTwo)
    }
  }
  const handleTrig = () => {
    if (numberOne.includes('tan')) {
      const left = numberOne.split('tan')[0]
      const right = numberOne.split('tan')[1]
      if (right === '') {
        numberOne = 'undefined';
      } else if (left === '') {
        numberOne = Math.tan(right);
      } else {
        numberOne = left * Math.tan(right);
      }
    } else if (numberTwo.includes('tan')) {
      const leftTwo = numberTwo.split('tan')[0]
      const rightTwo = numberTwo.split('tan')[1]
      if (rightTwo === '') {
        numberTwo = 'undefined';
      } else if (leftTwo === '') {
        numberTwo = Math.tan(rightTwo);
      } else {
        numberTwo = leftTwo * Math.tan(rightTwo);
      }
    } else if (numberOne.includes('sin')) {
      const left = numberOne.split('sin')[0]
      const right = numberOne.split('sin')[1]
      if (right === '') {
        numberOne = 'undefined';
      } else if (left === '') {
        numberOne = Math.sin(right);
      } else {
        numberOne = left * Math.sin(right);
      }
    } else if (numberTwo.includes('sin')) {
      const leftTwo = numberTwo.split('sin')[0]
      const rightTwo = numberTwo.split('sin')[1]
      if (rightTwo === '') {
        numberTwo = 'undefined';
      } else if (leftTwo === '') {
        numberTwo = Math.sin(rightTwo);
      } else {
        numberTwo = leftTwo * Math.sin(rightTwo);
      }
    } else if (numberOne.includes('cos')) {
      const left = numberOne.split('cos')[0]
      const right = numberOne.split('cos')[1]
      if (right === '') {
        numberOne = 'undefined';
      } else if (left === '') {
        numberOne = Math.cos(right);
      } else {
        numberOne = left * Math.cos(right);
      }
    } else if (numberTwo.includes('cos')) {
      const leftTwo = numberTwo.split('cos')[0]
      const rightTwo = numberTwo.split('cos')[1]
      if (rightTwo === '') {
        numberTwo = 'undefined';
      } else if (leftTwo === '') {
        numberTwo = Math.cos(rightTwo);
      } else {
        numberTwo = leftTwo * Math.cos(rightTwo);
      }
    } else if (numberOne.includes('log')) {
      const left = numberOne.split('log')[0]
      const right = numberOne.split('log')[1]
      if (right === '') {
        numberOne = 'undefined';
      } else if (left === '') {
        numberOne = Math.log(right);
      } else {
        numberOne = left * Math.log(right);
      }
    } else if (numberTwo.includes('log')) {
      const leftTwo = numberTwo.split('log')[0]
      const rightTwo = numberTwo.split('log')[1]
      if (rightTwo === '') {
        numberTwo = 'undefined';
      } else if (leftTwo === '') {
        numberTwo = Math.log(rightTwo);
      } else {
        numberTwo = leftTwo * Math.log(rightTwo);
      }
    } else if (numberOne.includes('ln')) {
      const left = numberOne.split('ln')[0]
      const right = numberOne.split('ln')[1]
      if (right === '') {
        numberOne = 'undefined';
      } else if (left === '') {
        numberOne = Math.LN10(right);
      } else {
        numberOne = left * Math.LN10(right);
      }
    } else if (numberTwo.includes('ln')) {
      const leftTwo = numberTwo.split('ln')[0]
      const rightTwo = numberTwo.split('ln')[1]
      if (rightTwo === '') {
        numberTwo = 'undefined';
      } else if (leftTwo === '') {
        numberTwo = Math.LN10(rightTwo);
      } else {
        numberTwo = leftTwo * Math.LN10(rightTwo);
      }
    }
  }
  handleTrig();
  handleE();
  handlePie();
  handleFac();
  if (isNaN(numberOne) || isNaN(numberTwo)) {
    return results = 'error';
  } else if (numberOne === 'undefined' || numberTwo === 'undefined') {
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
      case 'ln':
        results = big(numberOne * Math.LN10(numberTwo)).toString();
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
