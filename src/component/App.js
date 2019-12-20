import React, { Component } from 'react';
import Display from './Display';
import Bpanel from './Bpanel';
import '../App.css';
import calculate from '../logic/calculate';
import operate from '../logic/operate';
import Particleswrap from './Particlewrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: null,
    };
  }

  initialState = (total, next, operation) => ({ total, next, operation })

  handleClick = (buttonName) => {
    if (['-', '+'].includes(buttonName)) {
      this.setState({
        operation: buttonName,
      }, () => {
        calculate(this.state, buttonName);
        const { total, next, operation } = this.state;
        const numberONe = parseInt(total, 10);
        const numberTwo = next === '' && (buttonName === '+' || buttonName === '-') ? '0' : parseInt(next, 10);
        this.setState({
          total: operate(numberONe, numberTwo, operation),
          next: '',
        });
      });
    } else if (buttonName === '=') {
      const { total, next, operation } = this.state;
      this.setState({
        total: operate(total, next, operation),
      }, () => {
        calculate(this.state, buttonName);
        this.setState(this.initialState(total, '', null), () => {
          this.setState({
            total: operate(total, next, operation),
          }, () => { });
        });
      });
    } else if (buttonName === '+/-') {
      this.setState((prevState) => { calculate(prevState, buttonName); });
    } else if (buttonName === 'AC') {
      this.setState(calculate(this.initialState, buttonName), () => { });
    } else if (['x', '÷', '%'].includes(buttonName)) {
      this.setState({
        operation: buttonName,
      }, () => {
        calculate(this.state, buttonName);

        const { total, next, operation } = this.state;
        const numberONe = parseInt(total, 10);
        const numberTwo = next === '' && (buttonName === '÷' || buttonName === 'x' || buttonName === '%') ? '1' : parseInt(next, 10);

        this.setState({
          total: operate(numberONe.replace(/\s+/g, ''), numberTwo.replace(/\s+/g, ''), operation),
          next: '',
        });
      });
    } else {
      const { total, next, operation } = this.state;
      if (next === '' && total === '' && operation === null) {
        this.setState({
          total: total.concat(buttonName),
        }, () => {
          calculate(this.state, buttonName);
        });
      }

      if (next === '' && total === '0' && operation === '') {
        this.setState({
          total: total.concat(buttonName),
        }, () => {
          calculate(this.state, buttonName);
        });
      }

      if (next === '' && total !== '0' && operation === '') {
        this.setState({
          total: total.concat(buttonName),
        }, () => {
          calculate(this.state, buttonName);
        });
      }
      if (next === '' && total !== '' && operation === null) {
        this.setState({
          total: total.concat(buttonName),
        }, () => {
          calculate(this.state, buttonName);
        });
      }

      if (next === '' && total !== '' && operation !== null && operation !== '') {
        this.setState({
          next: next.concat(buttonName),
        }, () => {
          calculate(this.state, buttonName);
        });
      }
    }
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <div className="container-fluid">
          <Particleswrap />
          <div className="row">
            <div className="col-4 mx-auto caluatorBody shadow-lg mt-2 p-3">
              <Display result={total} nextKey={next} op={operation} />
              <Bpanel clickHandler={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
