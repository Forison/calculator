import React from 'react';
import id from 'shortid';
import Button from './Button';

const wide = arg => (arg === '0' ? 'wide' : 'normal');
const zeroStyling = arg => (arg === '0' ? 'col-6' : 'col-3');
const colorStyler = () => ('colorMe');
const Bpanel = ({ clickHandler }) => {
  const butName = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
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
                  <div key={id.generate()} className={`${zeroStyling(ButtonText)}`}>
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

export default Bpanel;
