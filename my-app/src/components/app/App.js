import React from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import {
    startBreakfast,
    startLunch,
    startDinner,
    stopBreakfast,
    stopLunch,
    stopDinner,
    updateBreakfast,
    updateLunch,
    updateDinner,
} from './../../actions';


const mapStateToProps = state => {
    return {
        meals: state.meals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startBreakfast: () => { dispatch(startBreakfast()) },
        startLunch: () => { dispatch(startLunch()) },
        startDinner: () => { dispatch(startDinner()) },
        stopBreakfast: () => { dispatch(stopBreakfast()) },
        stopLunch: () => { dispatch(stopLunch()) },
        stopDinner: () => { dispatch(stopDinner()) }
    }
}

const DisconnectedApp = ({
    meals,
    startBreakfast,
    startLunch,
    startDinner,
    stopDinner,
    stopLunch,
    stopBreakfast }) => {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="ContainerView">
          <div className="row">
            <div className="col-md-6">Breakfast</div>
            { !meals.breakfast.active && <div className="col-md-3 btn-primary" onClick={() => {startBreakfast()}}>START</div>}
            { meals.breakfast.active && <div className="col-md-3 btn-danger" onClick={() => {stopBreakfast()}}>FINISH</div>}
            <div className="col-md-3">10/100</div>
          </div>
          <div className="row">
            <div className="col-md-6">Lunch</div>
            { !meals.lunch.active && <div className="col-md-3 btn-primary" onClick={() => {startLunch()}}>START</div>}
            { meals.lunch.active && <div className="col-md-3 btn-danger" onClick={() => {stopLunch()}}>FINISH</div>}
            <div className="col-md-3">20/100</div>
          </div>
          <div className="row">
            <div className="col-md-6">Dinner</div>
            { !meals.dinner.active && <div className="col-md-3 btn-primary" onClick={() => {startDinner()}}>START</div>}
            { meals.dinner.active && <div className="col-md-3 btn-danger" onClick={() => {stopDinner()}}>FINISH</div>}
            <div className="col-md-3">10/100</div>
          </div>
        </div>
      </div>
    )
}

const App = connect(mapStateToProps, mapDispatchToProps)(DisconnectedApp)

export default App;
