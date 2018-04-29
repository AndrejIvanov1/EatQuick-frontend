const initialState = {
    checkingString: "",
    isActive: false
}

const checker = ( state = initialState, action ) => {
    switch (action.type) {
        case "UPDATE_CHECKING_STRING":
            return Object.assign({}, state, {
                checkingString: action.checkingString
            })
        case "ACTIVATE_CHECKER":
            return Object.assign({}, state, {
                isActive: true
            })
        default:
            return state
    }
}

export default checker