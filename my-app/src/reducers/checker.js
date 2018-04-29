const initialState = {
    checkingString: ""
}

const checker = ( state = initialState, action ) => {
    switch (action.type) {
        case "UPDATE_CHECKING_STRING":
            return Object.assign({}, state, {
                checkingString: action.checkingString
            })
        default:
            return state
    }
}

export default checker