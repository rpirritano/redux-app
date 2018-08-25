import C from './constants'
import fetch from 'isomorphic-fetch'

export function addDay(routine, date, weights=false, cardio=false){

  return {
    type: C.ADD_DAY,
    payload: {routine, date, weights, cardio}
  }
}

export const removeDay = function(date) {
  return {
    type: C.REMOVE_DAY,
    payload: date
  }
}

export const setGoal = (goal) =>
  ({
    type: C.SET_GOAL,
    payload: goal
  })

export const addError = (message) =>
  ({
    type: C.ADD_ERROR,
    payload: message
  })

export const clearError = index =>
  ({
    type: C.CLEAR_ERROR,
    payload: index
  })

export const changeSuggestions = suggestions =>
  ({
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestions
  })

export const clearSuggestions = () =>
  ({  type: C.CLEAR_SUGGESTIONS
  })

  //thunk - they return a function
  //can have as many dispatches or delay as want
  //can chech existing state before dispath
  //THUNKS allow to write robust action creators that are asynchronous
  export const randomGoals = () => (dispatch, getState) => {

    if (!getState().routineNames.fetching) {
//if fetching exercise names, then wont dispatch
      dispatch({
    		type: C.FETCH_ROUTINE_NAMES
    	})

      setTimeout(() => {
        dispatch({
          type: C.CANCEL_FETCHING
        })
      }, 1500)
    }
  }


//thunk for clearSuggestions
export const suggestRoutineNames = value => (dispatch) => {

  dispatch({
    type: C.FETCH_ROUTINE_NAMES
  })

  fetch('http://localhost:3333/routines/' + value)
    .then(response => response.json())
    .then(suggestions => {

      dispatch({
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
      })
    })
    .catch(error => {
      dispatch(
        addError(error.message)
      )
      dispatch({
        type: C.CANCEL_FETCHING
      })
    })
}
