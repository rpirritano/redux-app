import C from '../constants'

//if action is equal to the new goal, then return the new action
//otherwise return the original State
//parseInt to make sure it is a number and not a string by accident

export const goal = (state=10, action) =>
  (action.type === C.SET_GOAL) ?
    parseInt(action.payload) :
    state

export const exerciseDay = (state=null, action) =>
  (action.type === C.ADD_DAY) ?
    action.payload :
    state

//errors: need to be able to clear, as well as add errors, so use swtich to check type
export const errors = (state=[], action) => {
  switch(action.type) {

    case C.ADD_ERROR :

    return [
      ...state,
      action.payload
    ]

    case C.CLEAR_ERROR :
      return state.filter((message, i) => i !== action.payload)
//this function is called a predicate because it expects a true or false.
//If this function returns a true, then this message will be added to the new array.
// If it returns a false, then we will filter this message out, not adding it to the new array.

    default:
    return state
  }
}
