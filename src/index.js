import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
import { createStore } from 'redux'
//createStore is used to create instances of a store

const store = createStore(appReducer, initialState) //only requires the reducer. //also can take the initial state
//so now the store holds and manages state

console.log('inital state', store.getState()) //used to see the state in the createStore
//the reducer is invoked once to get the initial state
//dispatch is used to mutate the state and requires the action
store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"routine": "P90x",
		"date": "2018-10-05",
		"weights": true,
		"cardio": false
	}
})

console.log('next state', store.getState())
