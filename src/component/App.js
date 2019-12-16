import React, { Component } from 'react';
import Display from './Display';
import Bpanel from './Bpanel';
import '../App.css';

class App extends Component {


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 col-md-8 col-lg-4 mx-auto App shadow-lg mt-5 p-3">
            <Display />
            <Bpanel />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
