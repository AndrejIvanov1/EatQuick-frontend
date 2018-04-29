import React from 'react'
import { connect } from 'react-redux'
import './Checker.css'
import Editor from './../editor/Editor'
import { checkCode, updateCheckingString } from './../../actions'

const mapStateToProps = state => {
    return {
        checkingString: state.checker.checkingString
    }
}

const mapDispatchToProps = dispatch => {
    return {
        check: code => { dispatch(checkCode(code)) },
        updateCheckingString: checkingString => { dispatch(updateCheckingString(checkingString)) }
    }
}

const DisconnectedChecker = ({ checkingString, check, updateCheckingString }) => {
    const updateCheckingStringValue = event => {
        updateCheckingString(event.target.value)
    }

    return (
        <div className="App">
            <div className="ContainerView">
                <div className="row">
                    <Editor
                        rows={5}
                        initialValue={checkingString}
                        updateValue={updateCheckingStringValue}
                        placeholder="PLEASE INSERT YOUR CODE"
                    />
                </div>
                <div className="col-md-12 checkButtonRow">
                    {<div className="btn-primary" onClick={() => {checkCode(checkingString)}}>CHECK</div> }
                </div>
            </div>
        </div>
    )
}

const Checker = connect (null, mapDispatchToProps)(DisconnectedChecker)

export default Checker