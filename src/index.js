import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
import { createStore } from 'redux'
//createStore is used to create instances of a store

//use the state from localStorage when we create the store as our initial data.
const initalState = (localStorage['redux-store']) ?
	JSON.parse(localStorage['redux-store']) :
	{}

const store = createStore(appReducer, initalState) //only requires the reducer. //also can take the initial state
//so now the store holds and manages state
//the reducer is invoked once to get the initial state
//to expose it globally use below
window.store = store //now type store.getState() in console to access
//console.log('inital state', store.getState()) //used to see the state in the createStore

//subscribe so the state will change everytime an action is dispatch
//store.subscribe method can be used to add callback handlers that are invoked once every time actions are dispatched
//store.subscribe(() => console.log(store.getState()))

//will also store the state in the local storage
store.subscribe(() => {
	const state = JSON.stringify(store.getState())
	localStorage['redux-store'] = state
})

/*
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

store.dispatch({
	type: C.SET_GOAL,
	payload: 2
})
*/
//console.log('next state', store.getState())
