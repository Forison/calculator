import React, { Component } from 'react';
import Display from './Display';
import Bpanel from './Bpanel';
import '../App.css';
import calculate from '../logic/calculate';
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



  handleClick = (buttonName) => {
    
    this.setState(calculate(this.state, buttonName), () => {
      console.log(this.state)
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 col-md-8 col-lg-4 mx-auto caluatorBody shadow-lg mt-2 p-3">
              <Particleswrap />
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
