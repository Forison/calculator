import React from 'react';
import id from 'shortid';
import propTypes from 'prop-types';
import Button from './Button';

const wide = arg => (arg === '0' ? 'wide' : 'normal');
const zeroStyling = arg => (arg === '0' ? 'col-6' : 'col-2 p-0');
const advStyling = (arg) => {
  if (arg === '=') {
    return 'col-4'
  }
};
const colorStyler = () => ('colorMe');
const Bpanel = ({ clickHandler }) => {
  let advCal = false;
  const butName = [
    ['AC', '+/-', '%', '÷', 'tan', 'log'],
    ['7', '8', '9', 'x', 'ln', 'e'],
    ['4', '5', '6', '-', '√', 'Exp'],
    ['1', '2', '3', '+', , ')', '('],
    ['Rad', 'π', 'x!', 'Inv', 'sin', 'Cos'],
    ['0', '.', '='],
  ];
  return (
    <div>
      {
        butName.map(group => (
          <div key={id.generate()}>
            <div className="container">
              <div className="row">
                {group.map(ButtonText => (
                  <div key={id.generate()} className={`${zeroStyling(ButtonText)} ${advStyling(ButtonText)}`}>
                    <Button name={ButtonText} color={colorStyler()} wide={`${wide(ButtonText)}`} clickMe={clickHandler} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </div >
  );
};

Bpanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};
export default Bpanel;
