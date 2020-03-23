import React from 'react';
import id from 'shortid';
import propTypes from 'prop-types';
import Button from './Button';

const wide = arg => (arg === '0' ? 'wide' : 'normal');
const zeroStyling = arg => (arg === '0' ? 'col-6' : 'col-3');
const advStyling = 'col-2';
const colorStyler = () => ('colorMe');
const Bpanel = ({ clickHandler }) => {
  const butName = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const butAdvance = [
    ['(', ')', 'mc', 'm+', 'm-', 'mr'],
    ['2^nd', 'x^2', 'x^3', 'x^y', 'e^x', '10^x'],
    ['1/x', '2√x', '3√x', 'y√x', 'ln', 'log10'],
    ['x!', 'sin', 'cos', 'tan', 'e', 'EE'],
    ['Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand'],
  ];
  return (
    <div>
      {
        butName.map(group => (
          <div key={id.generate()}>
            <div className="container">
              <div className="row">
                {group.map(ButtonText => (
                  <div key={id.generate()} className={`${zeroStyling(ButtonText)} `}>
                    <Button name={ButtonText} color={colorStyler()} wide={`${wide(ButtonText)}`} clickMe={clickHandler} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      }

      {
        butAdvance.map(group => (
          <div key={id.generate()}>
            <div className="container">
              <div className="row">
                {group.map(ButtonText => (
                  <div key={id.generate()} className={`${advStyling} p-0`}>
                    <Button name={ButtonText} color={colorStyler()} wide={`${wide(ButtonText)}`} clickMe={clickHandler} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

Bpanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};
export default Bpanel;
