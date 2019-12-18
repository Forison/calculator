import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import operate from './logic/operate';

ReactDOM.render(<App />, document.getElementById('root'));

console.log(operate(1, 7,'÷'));