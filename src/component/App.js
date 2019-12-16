import React from 'react';
import Display from './Display';
import Bpanel from './Bpanel';
import '../App.css';

const App = () => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-11 col-md-8 col-lg-4 mx-auto App shadow-lg mt-5 p-3">
          <Display />
          <Bpanel />
        </div>
      </div>
    </div>
  </div>
);
export default App;
