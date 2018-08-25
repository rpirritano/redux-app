import C from './constants'

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
