import React from 'react';
import Button from './Button';

const Bpanel = () => {
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
        butName.map((group) => (
          <div key={group.id}>
            <div className="container">
              <div className="row">
                {group.map((ButtonText) => (
                  <div key={ButtonText.id} className="col-3">
                    <Button name={ButtonText} />
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
