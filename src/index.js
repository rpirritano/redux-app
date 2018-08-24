import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'

let state = initialState //use let for this since we will mutate state for the example

console.log(`
	Inital state
	==============
	goal: ${state.goal}
	routine: ${JSON.stringify(state.allExerciseDays)}
	fetching: ${state.exerciseNames.fetching}
	suggestions: ${state.exerciseNames.suggestions}
`

)

state = appReducer(state, { //action is the object
	type: C.SET_GOAL,
	payload: 2
})

state = appReducer(state, {
	type: C.ADD_DAY,
	payload: {
		"routine": "P90x",
		"date": "2018-09-01",
		"weights": true,
		"cardio": false
	}
})

state = appReducer(state, {
	type: C.CHANGE_SUGGESTIONS,
	payload: ["P90x Abs", "P90x Cardio", "P90x YogaX"]
})

console.log(`
	Next state
	==============
	goal: ${state.goal}
	routine: ${JSON.stringify(state.allExerciseDays)}
	fetching: ${state.exerciseNames.fetching}
	suggestions: ${state.exerciseNames.suggestions}
`

)





/*  First steps to check babel.node

import C from './constants'
import { allExerciseDays, goal } from './initialState.json'

//Test to see if works initially
//Run with babel.node script (in node_modules/.bin./babel-node )
 // Change below in package.json file to check and then change back
//"start": "webpack-dev-server"
//"start": "./node_modules/.bin/babel-node ./src/"


import C from './constants'
import { allExerciseDays, goal } from './initialState.json'

console.log(`

   Exercise Day Counter
   ================
   The goal is ${goal} days
   Initially there are ${allExerciseDays.length} exercise days in state

   Constants (actions)
   -------------------
   ${Object.keys(C).join('\n     ')}

`)
*/

/*
// SECOND: --------------------------------------------------------------------
//reducers are pure functions that are designed to manage specific parts of the state object.
//initialState.json file is a snapshot of what State could look like at any particular time in the application.
//need to create a reducer to manage every key in this file,
//and the reducer function will be named exactly the same thing as the key.
//write code to show how this reducer will work

import C from './constants'
import { goal } from './store/reducers'
//starts with initial state
//const since state value is immutable, will create a new state value
const state = 10
//action - objects with at least a type field
//require any info needed to make the change (payload)
//payload is the action that describes the state mutation
//REDUCER - a function that will take a given state and an action and produce a new state
const action = {
	type: C.SET_GOAL,
	payload: 15
}
//new state value
const nextState = goal(state, action)
//action is a json object so must stringify it
console.log(`

	initial goal: ${state}
	action: ${JSON.stringify(action)}
	new goal: ${nextState}

`)
*/

/*

----------------  Last part - replave the import for each reducer, as well as the
												state and action below to test - see previous commits
import C from './constants'
import { allExerciseDays } from './store/reducers'

const state = [
	{
		"routine": "P90X Cardio",
		"date": "2018-08-19",
		"weights": false,
		"cardio": true
	},
	{
		"routine": "Insanity",
		"date": "2018-08-23",
		"weights": false,
		"cardio": true
	}
]

const action = {
	type: C.REMOVE_DAY,
	payload: "2018-08-19" //date want to remove
}
//new state value
const nextState = allExerciseDays(state, action)
//action is a json object so must stringify it
console.log(`

	initial state: ${JSON.stringify(state)}
	action: ${JSON.stringify(action)}
	new state: ${JSON.stringify(nextState)}

`)

*/
