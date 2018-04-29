import React from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import Checker from './../checker/Checker'
import Progress from 'react-progressbar';
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

    const updateStats = meals => {
        if (meals.breakfast.active) {
            updateBreakfastStatistics(meals.breakfast.name)
        }

        if (meals.lunch.active) {
            updateLunchStatistics(meals.lunch.name)
        }

        if (meals.dinner.active) {
            updateDinnerStatistics(meals.dinner.name)
        }
    }

    updateStats(meals)


    const breakfastPercentage = meals.breakfast.served.length / meals.breakfast.invited.length * 100
    const lunchPercentage = meals.lunch.served.length / meals.lunch.invited.length * 100
    const dinnerPercentage = meals.dinner.served.length / meals.dinner.invited.length * 100

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
                { meals.breakfast.active && <div class="container col-md-2">
                <Progress completed={breakfastPercentage}/>
                </div> }
                { meals.breakfast.active && <div className="col-md-1">{meals.breakfast.served.length}/{meals.breakfast.invited.length}</div> }
                { !meals.breakfast.active && <div className="col-md-3">{meals.breakfast.served.length}/{meals.breakfast.invited.length}</div> }
              </div>
              <div className="row buttonRow">
                <div className="col-md-6">Lunch</div>
                { !meals.lunch.active && <div className="col-md-3 btn-primary" onClick={() => {startLunch()}}>START</div> }
                { meals.lunch.active && <div className="col-md-3 btn-danger" onClick={() => {stopLunch()}}>FINISH</div> }
                { meals.lunch.active && <div class="container col-md-2">
                <Progress completed={lunchPercentage}/>
                </div> }
                { meals.lunch.active && <div className="col-md-1">{meals.lunch.served.length}/{meals.lunch.invited.length}</div> }
                { !meals.lunch.active && <div className="col-md-3">{meals.lunch.served.length}/{meals.lunch.invited.length}</div> }
              </div>
              <div className="row buttonRow">
                <div className="col-md-6">Dinner</div>
                { !meals.dinner.active && <div className="col-md-3 btn-primary" onClick={() => {startDinner()}}>START</div> }
                { meals.dinner.active && <div className="col-md-3 btn-danger" onClick={() => {stopDinner()}}>FINISH</div> }
                { meals.dinner.active && <div class="container col-md-2">
                <Progress completed={dinnerPercentage}/>
                </div> }
                { meals.dinner.active && <div className="col-md-1">{meals.dinner.served.length}/{meals.dinner.invited.length}</div> }
                { !meals.dinner.active && <div className="col-md-3">{meals.dinner.served.length}/{meals.dinner.invited.length}</div> }
              </div>
          </div>
          <div className="topSide">
              {  meals.breakfast.active && <div className="row buttonRow">
                <div className="btn-primary" onClick={() => { updateMeal(meals.breakfast.name); setTimeout(updateStats(meals), 2000); }}>BRING MORE PEOPLE FOR BREAKFAST</div>
              </div> }
              { meals.lunch.active &&  <div className="row buttonRow">
                <div className="btn-primary" onClick={() => { updateMeal(meals.lunch.name); setTimeout(updateStats(meals), 2000); }}>BRING MORE PEOPLE FOR LUNCH</div>
              </div> }
              { meals.dinner.active && <div className="row buttonRow">
                <div className="btn-primary" onClick={() => { updateMeal(meals.dinner.name); setTimeout(updateStats(meals), 2000); }}>BRING MORE PEOPLE FOR DINNER</div>
              </div>}
            </div>
            <div className="row buttonRow">
                <div className="btn-primary" onClick={() => {activateChecker()}}>BRING UP CHECKER</div>
            </div>
        </div>
      </div>
    )
}

const App = connect(mapStateToProps, mapDispatchToProps)(DisconnectedApp)

export default App
