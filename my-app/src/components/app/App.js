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
    updateMeal,
    activateChecker,
    updateDinnerStatistics,
    updateLunchStatistics,
    updateBreakfastStatistics
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
        updateMeal: mealName => { dispatch(updateMeal(mealName)) },
        activateChecker: () => { dispatch(activateChecker()) },
        updateDinnerStatistics: dinnerName => { dispatch(updateDinnerStatistics(dinnerName)) },
        updateLunchStatistics: lunchName => { dispatch(updateLunchStatistics(lunchName)) },
        updateBreakfastStatistics: breakfastName => { dispatch(updateBreakfastStatistics(breakfastName)) }
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
    updateMeal,
    activateChecker,
    updateDinnerStatistics,
    updateLunchStatistics,
    updateBreakfastStatistics
     }) => {

    setInterval(() => {
        if (meals.breakfast.active) {
            updateBreakfastStatistics(meals.breakfast.name)
        }

        if (meals.lunch.active) {
            updateLunchStatistics(meals.lunch.name)
        }

        if (meals.dinner.active) {
            updateDinnerStatistics(meals.dinner.name)
        }
    }, 5000)

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
                <div className="col-md-3">{meals.breakfast.served.length}/{meals.breakfast.invited.length}</div>
              </div>
              <div className="row buttonRow">
                <div className="col-md-6">Lunch</div>
                { !meals.lunch.active && <div className="col-md-3 btn-primary" onClick={() => {startLunch()}}>START</div> }
                { meals.lunch.active && <div className="col-md-3 btn-danger" onClick={() => {stopLunch()}}>FINISH</div> }
                <div className="col-md-3">{meals.lunch.served.length}/{meals.lunch.invited.length}</div>
              </div>
              <div className="row buttonRow">
                <div className="col-md-6">Dinner</div>
                { !meals.dinner.active && <div className="col-md-3 btn-primary" onClick={() => {startDinner()}}>START</div> }
                { meals.dinner.active && <div className="col-md-3 btn-danger" onClick={() => {stopDinner()}}>FINISH</div> }
                <div className="col-md-3">{meals.dinner.served.length}/{meals.dinner.invited.length}</div>
              </div>
          </div>
          <div className="topSide">
              {  meals.breakfast.active && <div className="row buttonRow">
                {<div className="btn-primary" onClick={() => { updateMeal(meals.breakfast.name) }}>BRING MORE PEOPLE FOR BREAKFAST</div> }
              </div> }
              { meals.lunch.active &&  <div className="row buttonRow">
                {<div className="btn-primary" onClick={() => { updateMeal(meals.lunch.name) }}>BRING MORE PEOPLE FOR LUNCH</div> }
              </div> }
              { meals.dinner.active && <div className="row buttonRow">
                {<div className="btn-primary" onClick={() => { updateMeal(meals.dinner.name) }}>BRING MORE PEOPLE FOR DINNER</div> }
              </div>}
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
