import C from './constants'
import storeFactory from './store'

const initialState = (localStorage['redux-store']) ?
	JSON.parse(localStorage['redux-store']) :
	{}

const saveState = () => {
	const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
}

const store = storeFactory(initialState)

store.subscribe(saveState)

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"routine": "Insanity",
		"date": "2018-08-21",
		"weights": false,
		"cardio": true
	}
})

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"routine": "P90X",
		"date": "2018-08-22",
		"weights": true,
		"cardio": false
	}
})

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"routine": "P90X",
		"date": "2018-08-23",
		"weights": true,
		"cardio": false
	}
})
