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
    this.setState(prevState => calculate(prevState, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <div className="container-fluid">
          <Particleswrap />
          <div className="row">
            <div className="col-12 col-md-8 col-lg-4 mx-auto bg-secondary shadow-lg mt-2 p-3">
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
