import React from 'react'
import { connect } from 'react-redux'
import './Checker.css'
import Editor from './../editor/Editor'
import { checkCode, updateCheckingString } from './../../actions'

const mapStateToProps = state => {
    return {
        checkingString: state.checker.checkingString,
        meals: state.meals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        check: (name, code) => { dispatch(checkCode(name, code)) },
        updateCheckingString: checkingString => { dispatch(updateCheckingString(checkingString)) }
    }
}

const DisconnectedChecker = ({ checkingString, meals, check, updateCheckingString }) => {
    const updateCheckingStringValue = event => {
        updateCheckingString(event.target.value)
    }

    const sendCheckCall = checkingString => {
        if (meals.breakfast.active) {
            check(meals.breakfast.name, checkingString)
        } else if (meals.lunch.active) {
            check(meals.lunch.name, checkingString)
        } else if (meals.dinner.active) {
            check(meals.dinner.name, checkingString)
        }
    }

    return (
        <div className="ContainerView">
            <div className="row margined">
                <Editor
                    rows={5}
                    initialValue={checkingString}
                    updateValue={updateCheckingStringValue}
                    placeholder="PLEASE INSERT YOUR CODE"
                />
            </div>
            <div className="col-md-12">
                {<div className="btn-primary" onClick={() => {sendCheckCall(checkingString)}}>CHECK</div> }
            </div>
        </div>
    )
}

const Checker = connect (null, mapDispatchToProps)(DisconnectedChecker)

export default Checker