import React, { Component } from 'react';
import id from 'shortid';
import propTypes from 'prop-types';
import Button from './Button';


class Bpanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inverse: false,
      but: [
        ['AC', '+/-', '%', '÷', 'Inv', 'Rad'],
        ['7', '8', '9', 'x', 'π', 'e'],
        ['4', '5', '6', '-', '√', 'Exp'],
        ['1', '2', '3', '+', ')', '('],
        ['x!', 'ln', 'log', 'tan', 'sin', 'cos'],
        ['0', '.', '='],
      ],
      invBut: [
        ['AC', '+/-', '%', '÷', 'Inv', 'Rad'],
        ['7', '8', '9', 'x', 'π', 'e'],
        ['4', '5', '6', '-', '√', 'Exp'],
        ['1', '2', '3', '+', ')', '('],
        ['x!', 'ln', 'log', 'tanh', 'sinh', 'cosh'],
        ['0', '.', '='],
      ],
    }
  }
  handleInvClick = () => {
    const Inv = document.getElementById('Inv');
    Inv.onclick = () => {
      this.updatePanel();
    }
  }
  componentDidMount = () => {
    this.handleInvClick();
  }
  componentDidUpdate = () => {
    const { inverse } = this.state;
    this.handleInvClick();
    this.styleToggle(inverse);
  }
  styleToggle = (arg) => {
    if (arg === false) {
      document.getElementById('Inv').style.backgroundColor = "#f05e23";
      document.getElementById('sin').style.backgroundColor = "#f05e23";
      document.getElementById('cos').style.backgroundColor = "#f05e23";
      document.getElementById('tan').style.backgroundColor = "#f05e23";
    } else {
      document.getElementById('Inv').style.backgroundColor = "#fff";
      document.getElementById('sinh').style.backgroundColor = "#fff";
      document.getElementById('cosh').style.backgroundColor = "#fff";
      document.getElementById('tanh').style.backgroundColor = "#fff";
    }
  }
  wide = arg => (arg === '0' ? 'wide' : 'normal');
  zeroStyling = arg => (arg === '0' ? 'col-6' : 'col-2 p-0');
  advStyling = (arg) => {
    if (arg === '=') {
      return 'col-4'
    }
  };
  colorStyler = () => ('colorMe');
  updatePanel = () => {
    this.setState({ inverse: !this.state.inverse })
  };
  render() {
    const { invBut, but, inverse } = this.state;
    let butName = inverse === false ? but : invBut;
    return (
      <div>
        {
          butName.map(group => (
            <div key={id.generate()}>
              <div className="container">
                <div className="row">
                  {group.map((ButtonText) => (
                    <div key={id.generate()} className={`${this.zeroStyling(ButtonText)} ${this.advStyling(ButtonText)}`}>
                      <Button
                        name={ButtonText}
                        color={this.colorStyler()}
                        wide={`${this.wide(ButtonText)}`}
                        clickMe={this.props.clickHandler}
                        id={ButtonText}
                        invUpdate={this.updatePanel}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        }
      </div >
    );
  }
}

Bpanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};
export default Bpanel;
