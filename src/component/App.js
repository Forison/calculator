import React from 'react';
import Display from './Display';
import Bpanel from './Bpanel';
import '../App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 mx-auto App shadow-lg mt-5 p-3">
          <Display />
          <Bpanel />
        </div>
      </div>
    </div>
  );
}
export default App;