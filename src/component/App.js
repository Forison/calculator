import React from 'react';
import Display from './Display';
import Bpanel from './Bpanel';
import '../App.css';

// import calculate from '../logic/calculate'; //commented for passing linter errors

const App = () => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 mx-auto caluatorBody shadow-lg mt-5 p-3">
          <Display />
          <Bpanel />
        </div>
      </div>
    </div>
  </div>
);
export default App;
