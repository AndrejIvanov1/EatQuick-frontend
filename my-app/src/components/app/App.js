import React from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import Checker from './../checker/Checker'
import './App.css'
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
    activateChecker
} from './../../actions'


const mapStateToProps = state => {
    return {
        meals: state.meals,
        showChecker: state.checker.isActive
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startBreakfast: () => { dispatch(startBreakfast()) },
        startLunch: () => { dispatch(startLunch()) },
        startDinner: () => { dispatch(startDinner()) },
        stopBreakfast: () => { dispatch(stopBreakfast()) },
        stopLunch: () => { dispatch(stopLunch()) },
        stopDinner: () => { dispatch(stopDinner()) },
        updateBreakfast: () => { dispatch(updateBreakfast()) },
        activateChecker: () => { dispatch(activateChecker()) }
    }
}

const DisconnectedApp = ({
    meals,
    showChecker,
    startBreakfast,
    startLunch,
    startDinner,
    stopDinner,
    stopLunch,
    stopBreakfast,
    updateBreakfast,
    activateChecker }) => {

    if (showChecker) {
        return (
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                </header>
                <Checker/>
            </div>
        )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="ContainerView">
          <div className="topSide">
              <div className="row buttonRow">
                <div className="col-md-6">Breakfast</div>
                { !meals.breakfast.active && <div className="col-md-3 btn-primary" onClick={() => {startBreakfast()}}>START</div> }
                { meals.breakfast.active && <div className="col-md-3 btn-danger" onClick={() => {stopBreakfast()}}>FINISH</div> }
                <div className="col-md-3">10/100</div>
              </div>
              <div className="row buttonRow">
                <div className="col-md-6">Lunch</div>
                { !meals.lunch.active && <div className="col-md-3 btn-primary" onClick={() => {startLunch()}}>START</div> }
                { meals.lunch.active && <div className="col-md-3 btn-danger" onClick={() => {stopLunch()}}>FINISH</div> }
                <div className="col-md-3">20/100</div>
              </div>
              <div className="row buttonRow">
                <div className="col-md-6">Dinner</div>
                { !meals.dinner.active && <div className="col-md-3 btn-primary" onClick={() => {startDinner()}}>START</div> }
                { meals.dinner.active && <div className="col-md-3 btn-danger" onClick={() => {stopDinner()}}>FINISH</div> }
                <div className="col-md-3">10/100</div>
              </div>
          </div>
          <div className="topSide">
              <div className="row buttonRow">
                {<div className="btn-primary" onClick={() => {updateBreakfast()}}>BRING MORE PEOPLE FOR BREAKFAST</div> }
              </div>
              <div className="row buttonRow">
                {<div className="btn-primary" onClick={() => {updateLunch()}}>BRING MORE PEOPLE FOR LUNCH</div> }
              </div>
              <div className="row buttonRow">
                {<div className="btn-primary" onClick={() => {updateDinner()}}>BRING MORE PEOPLE FOR DINNER</div> }
              </div>
            </div>
            <div className="row buttonRow">
                {<div className="btn-primary" onClick={() => {activateChecker()}}>BRING UP CHECKER</div> }
            </div>
        </div>
      </div>
    )
}

const App = connect(mapStateToProps, mapDispatchToProps)(DisconnectedApp)

export default App
