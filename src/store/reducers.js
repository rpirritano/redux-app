import C from '../constants'

//if action is equal to the new goal, then return the new action
//otherwise return the original State
//parseInt to make sure it is a number and not a string by accident

export const goal = (state=10, action) => {

  if(action.type === C.SET_GOAL) {
    return parseInt(action.payload)
  } else {
    return state
  }
}
