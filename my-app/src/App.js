import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="ContainerView">
          <div className="row">
              <div className="col-md-6">Breakfast</div>
              <div className="col-md-2 btn-primary" onClick={() => {}}>START</div>
              <div className="col-md-2 btn-danger" disabled onClick={() => {}}>FINISH</div>
              <div className="col-md-2">10/100</div>
          </div>
          <div className="row">
            <div className="col-md-6">Lunch</div>
            <div className="col-md-2 btn-primary" onClick={() => {}}>START</div>
            <div className="col-md-2 btn-primary" onClick={() => {}}>FINISH</div>
            <div className="col-md-2">10/100</div>
          </div>
          <div className="row">
            <div className="col-md-6">Dinner</div>
            <div className="col-md-2 btn-primary" onClick={() => {}}>START</div>
            <div className="col-md-2 btn-primary" onClick={() => {}}>FINISH</div>
            <div className="col-md-2">10/100</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
