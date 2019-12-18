import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import calculate from './logic/calculate';

ReactDOM.render(<App />, document.getElementById('root'));
const calObj = {
    total: 8,
    next: 9,
    operation: '+'
}
console.log(calculate(calObj, 'x'));