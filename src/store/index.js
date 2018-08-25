import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'


//middlewear
const consoleMessages = (store) => (next) => (action) => {
  let result
  //add code before result=next(action) to have it occur before the dispatched
  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('exercise days', store.getState().allExerciseDays.length)

  result = next(action) //where action gets dispatched
  //code after will give info now about current getState
  let { allExerciseDays, goal, errors, exerciseNames } = store.getState()

  console.log(`
    exercise days: ${allExerciseDays.length}
    goal: ${goal}
    fetching: ${exerciseNames.fetching}
    suggestions: ${exerciseNames.suggestions}
    errors: ${errors.length}
  `)

  console.groupEnd()


  return result //to get registered
}



//use to crete stores
export default (initialState={}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}
