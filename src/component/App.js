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
      total: '0',
      next: '',
      operation: null
    }

  }
  initialState = (total, next, operation) => {
    return { total, next, operation }
  }
  handleClick = buttonName => {
    if (['-', '+'].includes(buttonName)) {
      this.setState({
        operation: buttonName,
        // next: this.state.next.concat(buttonName)
      }, () => {
        calculate(this.state, buttonName)
        console.log(this.state)
        const { total, next, operation } = this.state
        const numberONe = parseInt(total)
        const numberTwo = next === '' && (buttonName === '+' || buttonName === '-') ? '0' : parseInt(next)
        console.log(operate(numberONe, numberTwo, operation))
        this.setState({
          total: operate(numberONe, numberTwo, operation),
          next: ''
        })
      })
    } else if (buttonName === '=') {
      const { total, next, operation } = this.state
      this.setState({
        total: operate(total, next, operation)
      }, () => {
        calculate(this.state, buttonName)
        this.setState(this.initialState(total, '', null), () => {
          this.setState({
            total: operate(total, next, operation)
          }, () => { console.log(this.state) })

        })
      })
    } else if (buttonName === '+/-') {
      this.setState(calculate(this.state, buttonName), () => { console.log(this.state) })
    } else if (buttonName === 'AC') {
      this.setState(calculate(this.state, buttonName), () => { console.log(this.state) })
    } else if (['x', '÷', '%'].includes(buttonName)) {
      this.setState({
        operation: buttonName,
        // next: this.state.next.concat(buttonName)
      }, () => {
        calculate(this.state, buttonName)
        console.log(this.state)
        const { total, next, operation } = this.state
        const numberONe = parseInt(total)
        const numberTwo = next === '' && (buttonName === '÷' || buttonName === 'x' || buttonName === '%') ? '1' : parseInt(next)
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

      if (this.state.total === '0') {
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

      if (this.state.next === '' && this.state.total !== '0' && this.state.total !== '' && this.state.operation !== null) {
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
  }
  render() {
    const { total, next, operation } = this.state
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 mx-auto caluatorBody shadow-lg mt-5 p-3">
              <Display result={total} nextKey={next} op={operation} />
              <Bpanel clickHandler={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App