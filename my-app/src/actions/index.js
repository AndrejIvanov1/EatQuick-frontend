//const backEndHostName = "http://localhost:3030"
const backEndHostName = "https://4793a362.ngrok.io"


export const setBreakfastName = name => {
    return {
        type: "SET_BRFST_NAME",
        name
    }
}

export const setLunchName = name => {
    return {
        type: "SET_LUNCH_NAME",
        name
    }
}

export const setDinnerName = name => {
    return {
        type: "SET_DINNER_NAME",
        name
    }
}

export const activateChecker = () => {
    return {
        type: "ACTIVATE_CHECKER"
    }
}

export const deActivateChecker = () => {
    return {
        type: "DEACTIVATE_CHECKER"
    }
}

export const checkCode = (name, code) => {
    return dispatch => {
              console.log("Updating meal" + name)
              const url = `${backEndHostName}/meal/1?mode=feed`

              fetch(url, {
                 method: "PUT",
                 body: JSON.stringify({ mealName: name, uid: code }),
                 headers: new Headers({
                     'Content-Type': 'application/json'
                 })})
              .then(response => {
                  console.log("Response: " + response)
                  return response.json()
              })
              .then(json => {
              })
              .catch( error => console.log(error) )
      }
}

export const updateCheckingString = checkingString => {
    return {
        type: "UPDATE_CHECKING_STRING",
        checkingString
    }
}

export const startBreakfast_inStore = () => {
    return {
        type: "START_BREAKFAST"
    }
}

export const startLunch_inStore = () => {
    return {
        type: "START_LUNCH"
    }
}

export const startDinner_inStore = () => {
    return {
        type: "START_DINNER"
    }
}

export const updateBreakfast_inStore = (invited, served) => {
    return {
        type: "UPDATE_BREAKFAST",
        invited,
        served
    }
}

export const updateLunch_inStore = (invited, served) => {
    return {
        type: "UPDATE_LUNCH",
        invited,
        served
    }
}

export const updateDinner_inStore = (invited, served) => {
    return {
        type: "UPDATE_DINNER",
        invited,
        served
    }
}

export const startBreakfast = () => {
    return dispatch => {
        console.log("Starting breakfast")
        const url = `${backEndHostName}/meal`
        const breakfastName = "breakfast-" + Math.random().toString(36).substring(2, 15)

        fetch(url, {
           method: "POST",
           mode: 'cors',
           body: JSON.stringify({ mealName: breakfastName }),
           headers: new Headers({
               'Content-Type': 'application/json'
           })})
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(json => {
            dispatch(startBreakfast_inStore())
            dispatch(setBreakfastName(breakfastName))

        })
        .catch( error => console.log(error) )
    }
}

export const startLunch = () => {
      return dispatch => {
              console.log("Starting lunch")
              const url = `${backEndHostName}/meal`
              const lunchName = "lunch-" + Math.random().toString(36).substring(2, 15)

              fetch(url, {
                 method: "POST",
                 mode: 'cors',
                 body: JSON.stringify({ mealName: lunchName }),
                 headers: new Headers({
                     'Content-Type': 'application/json'
                 })})
              .then(response => {
                  console.log(response)
                  return response.json()
              })
              .then(json => {
                  dispatch(startLunch_inStore())
                  dispatch(setLunchName(lunchName))
              })
              .catch( error => console.log(error) )
          }
    }
export const startDinner = () => {
   return dispatch => {
           console.log("Starting dinner")
           const url = `${backEndHostName}/meal`
           const dinnerName = "dinner-" + Math.random().toString(36).substring(2, 15)

           fetch(url, {
              method: "POST",
              mode: 'cors',
              body: JSON.stringify({ mealName: dinnerName }),
              headers: new Headers({
                  'Content-Type': 'application/json'
              })})
           .then(response => {
               console.log(response)
               return response.json()
           })
           .then(json => {
               dispatch(startDinner_inStore())
               dispatch(setDinnerName(dinnerName))
           })
           .catch( error => console.log(error) )
       }
}
export const stopBreakfast = () => {
    return {
        type: "STOP_BREAKFAST"
    }
}
export const stopLunch = () => {
  return {
      type: "STOP_LUNCH"
  }
}
export const stopDinner = () => {
   return {
       type: "STOP_DINNER"
   }
}

export const updateMeal = mealName => {
      return dispatch => {
              console.log("Updating meal" + mealName)
              const url = `${backEndHostName}/meal/1?mode=invite`

              fetch(url, {
                 method: "PUT",
                 body: JSON.stringify({ mealName: mealName }),
                 headers: new Headers({
                     'Content-Type': 'application/json'
                 })})
              .then(response => {
                  console.log("Response: " + response)
                  return response.json()
              })
              .then(json => {
              })
              .catch( error => console.log(error) )
      }
}

export const updateBreakfastStatistics = mealName => {
    return dispatch => {
        const url = `${backEndHostName}/meal/${mealName}?mealName=${mealName}`

        fetch(url, {
         method: "GET",
         headers: new Headers({
             'Content-Type': 'application/json'
         })})
        .then(response => {
          console.log("Response: " + response)
          return response.json()
        })
        .then(json => {
        if (!Array.isArray(json)) {
          dispatch(updateBreakfast_inStore(json.invited_tables, json.served_tables))
        }
        })
        .catch( error => console.log(error) )
    }
}

export const updateLunchStatistics = mealName => {
    return dispatch => {
        const url = `${backEndHostName}/meal/${mealName}`

        fetch(url, {
         method: "GET",
         headers: new Headers({
             'Content-Type': 'application/json'
         })})
        .then(response => {
          console.log("Response: " + response)
          return response.json()
        })
        .then(json => {
          if (!Array.isArray(json)) {
              dispatch(updateLunch_inStore(json.invited_tables, json.served_tables))
          }
        })
        .catch( error => console.log(error) )
    }
}

export const updateDinnerStatistics = mealName => {
    return dispatch => {
        const url = `${backEndHostName}/meal/${mealName}`

        fetch(url, {
         method: "GET",
         headers: new Headers({
             'Content-Type': 'application/json'
         })})
        .then(response => {
          console.log("Response: " + response)
          return response.json()
        })
        .then(json => {
          if (!Array.isArray(json)) {
              dispatch(updateDinner_inStore(json.invited_tables, json.served_tables))
          }
        })
        .catch( error => console.log(error) )
    }
}
