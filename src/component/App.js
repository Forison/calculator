import React, { Component } from 'react';
import Display from './Display';
import Bpanel from './Bpanel';
import '../App.css';
import calculate from '../logic/calculate';
import operate from '../logic/operate';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: '',
      next: '',
      operation: null
    }
  }
  handleClick = buttonName => {
    // // write total unless buttonName is not operator
    if (['x', '-', '+', '÷', '/', '='].includes(buttonName)) {
      this.setState({
        operation: buttonName,
        // next: this.state.next.concat(buttonName)
      }, () => {
        calculate(this.state, buttonName)
        console.log(this.state)
        const { total, next, operation } = this.state
        const numberONe = parseInt(total)
        const numberTwo = next === '' ? '0' : parseInt(next)
        console.log(operate(numberONe, numberTwo, operation))
        this.setState({
          total: operate(numberONe, numberTwo, operation),
          next: ''
        })
      })
    } else {

      if (this.state.next === '' && this.state.total === '' && this.state.operation === null) {
        this.setState({
          total: this.state.total.concat(buttonName)
        }, () => {
          calculate(this.state, buttonName)
          console.log(this.state)

        })
      }
      if (this.state.next === '' && this.state.total !== '' && this.state.operation === null) {
        this.setState({
          total: this.state.total.concat(buttonName)
        }, () => {
          calculate(this.state, buttonName)
          console.log(this.state)
        })
      }

      if (this.state.next === '' && this.state.total !== '' && this.state.operation !== null) {
        this.setState({
          next: this.state.next.concat(buttonName)
        }, () => {
          calculate(this.state, buttonName)
          console.log(this.state)
        })
      }
      if (this.state.next !== '' && this.state.total !== '' && this.state.operation !== null) {
        this.setState({
          next: this.state.next.concat(buttonName)
        }, () => {
          calculate(this.state, buttonName)
          // console.log(this.state)
        })
      }
    }
    // switch (buttonName) {
    //   case '+':

    //     this.setState({
    //       total: this.state.total.concat(buttonName)
    //     }, () => {
    //       console.log(calculate(this.state, buttonName))
    //       console.log(this.state)
    //     })
    //     break;

    //   default:
    //     break;
    // }
  }
  work = (buttonName) => {
    switch (buttonName) {
      case 'AC':
        console.log(calculate(this.state, 'AC'))
        break;
      case '+/-':
        console.log(calculate(this.state, '+/-'))
        break;
      case '=':
        console.log(calculate(this.state, 'AC'))
        break;

      default:
        console.log(calculate(this.state, buttonName))
        break;
    }
  }
  render() {
    const { total } = this.state
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 mx-auto caluatorBody shadow-lg mt-5 p-3">
              <Display result={total} />
              <Bpanel clickHandler={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App