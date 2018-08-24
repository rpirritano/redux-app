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
