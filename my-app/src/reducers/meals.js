const initialState = {
    breakfast: {
        active: false,
        invited: [],
        served: [],
        name: ""
    },
    lunch: {
        active: false,
        invited: [],
        served: [],
        name: ""
    },
    dinner: {
        active: false,
        invited: [],
        served: [],
        name: ""
    }
}

const meals = ( state = initialState, action ) => {
    switch (action.type) {
        case "SET_BRFST_NAME":
            return Object.assign({}, state, {
                breakfast: {
                    active: state.breakfast.active,
                    invited: state.breakfast.invited,
                    served: state.breakfast.served,
                    name: action.name
                }
            })
        case "SET_LUNCH_NAME":
            return Object.assign({}, state, {
                lunch: {
                    active: state.lunch.active,
                    invited: state.lunch.invited,
                    served: state.lunch.served,
                    name: action.name
                }
            })
        case "SET_DINNER_NAME":
            return Object.assign({}, state, {
                dinner: {
                    active: state.dinner.active,
                    invited: state.dinner.invited,
                    served: state.dinner.served,
                    name: action.name
                }
            })
        case "START_BREAKFAST":
            return Object.assign({}, state, {
                breakfast: {
                    active: true,
                    invited: state.breakfast.invited,
                    served: state.breakfast.served,
                    name: state.breakfast.name
                }
            })
        case "START_LUNCH":
            return Object.assign({}, state, {
                lunch: {
                   active: true,
                   invited: state.lunch.invited,
                   served: state.lunch.served,
                   name: state.lunch.name
                }
            })
        case "START_DINNER":
            return Object.assign({}, state, {
                dinner: {
                   active: true,
                   invited: state.dinner.invited,
                   served: state.dinner.served,
                   name: state.dinner.name
                }
            })
        case "STOP_BREAKFAST":
            return Object.assign({}, state, {
                breakfast: {
                     active: false,
                     invited: state.breakfast.invited,
                     served: state.breakfast.served,
                     name: ""
                  }
            })
        case "STOP_LUNCH":
            return Object.assign({}, state, {
                lunch: {
                      active: false,
                     invited: state.lunch.invited,
                     served: state.lunch.served,
                     name: ""
                  }
            })
        case "STOP_DINNER":
            return Object.assign({}, state, {
                dinner: {
                      active: false,
                      invited: state.dinner.invited,
                      served: state.dinner.served,
                      name: ""
                   }
            })
        case "UPDATE_BREAKFAST":
            return Object.assign({}, state, {
                breakfast: {
                     active: state.breakfast.active,
                     invited: action.invited,
                     served: action.served,
                     name: state.breakfast.name
                  }
            })
        case "UPDATE_LUNCH":
            return Object.assign({}, state, {
                lunch: {
                     active: state.lunch.active,
                     invited: action.invited,
                     served: action.served,
                     name: state.lunch.name
                  }
            })
        case "UPDATE_DINNER":
            return Object.assign({}, state, {
                dinner: {
                      active: state.dinner.active,
                      invited: action.invited,
                      served: action.served,
                      name: state.dinner.name
                   }
            })
        default:
            return state
    }
}

export default meals