import React, { Component } from 'react';
import './App.css';
import ButtonSS from './ButtonSS/ButtonSS';
import ButtonHooks from './ButtonHooks/ButtonHooks';
import DataLoading from './DataLoading/DataLoading';
import CRUDApp from './CRUDApp/CRUDApp';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <ButtonSS/> */}
      {/* <ButtonHooks/> */}
      {/* <DataLoading/> */}
      <CRUDApp/>
      </div>
    );
  }
}

export default App;
