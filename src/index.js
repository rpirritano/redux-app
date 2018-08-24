import C from './constants'
import { exerciseDay } from './store/reducers'

const state = null

const action = {
	type: C.ADD_DAY,
	payload: {
		"routine": "Insanity",
		"date": "2018-08-23",
		"weights": false,
		"cardio": true
	}
}
//new state value
const nextState = exerciseDay(state, action)
//action is a json object so must stringify it
console.log(`

	initial state: ${state}
	action: ${JSON.stringify(action)}
	new state: ${JSON.stringify(nextState)}

`)



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
