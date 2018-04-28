const initialState = {
    breakfast: {
        active: false,
        invited: [],
        served: []
    },
    lunch: {
        active: false,
        invited: [],
        served: []
    },
    dinner: {
        active: false,
        invited: [],
        served: []
    }
}

const meals = ( state = initialState, action ) => {
    switch (action.type) {
        case "START_BREAKFAST":
            return Object.assign({}, state, {
                breakfast: {
                    active: true,
                    invited: state.breakfast.invited,
                    served: state.breakfast.served
                }
            })
        case "START_LUNCH":
            return Object.assign({}, state, {
                lunch: {
                   active: true,
                   invited: state.lunch.invited,
                   served: state.lunch.served
                }
            })
        case "START_DINNER":
            return Object.assign({}, state, {
                dinner: {
                   active: true,
                   invited: state.dinner.invited,
                   served: state.dinner.served
                }
            })
        case "STOP_BREAKFAST":
            return Object.assign({}, state, {
                breakfast: {
                     active: false,
                     invited: state.breakfast.invited,
                     served: state.breakfast.served
                  }
            })
        case "STOP_LUNCH":
            return Object.assign({}, state, {
                lunch: {
                      active: false,
                     invited: state.lunch.invited,
                     served: state.lunch.served
                  }
            })
        case "STOP_DINNER":
            return Object.assign({}, state, {
                dinner: {
                      active: false,
                      invited: state.dinner.invited,
                      served: state.dinner.served
                   }
            })
        case "UPDATE_BREAKFAST":
            return Object.assign({}, state, {
                breakfast: {
                     active: state.breakfast.active,
                     invited: action.invited,
                     served: action.served
                  }
            })
        case "UPDATE_LUNCH":
            return Object.assign({}, state, {
                lunch: {
                     active: state.lunch.active,
                     invited: action.invited,
                     served: action.served
                  }
            })
        case "UPDATE_DINNER":
            return Object.assign({}, state, {
                dinner: {
                      active: state.dinner.active,
                      invited: action.invited,
                      served: action.served
                   }
            })
        default:
            return state
    }
}

export default meals