import React, { Component } from 'react';
import Display from './Display';
import Bpanel from './Bpanel';
import '../App.css';
// import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }
  handleClick = (buttonName) => {
    console.log(`clicked${buttonName}`)
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 mx-auto caluatorBody shadow-lg mt-5 p-3">
              <Display />
              <Bpanel clickHandler={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App