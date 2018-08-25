//Action creators are functions that create and return actions.
//They allow us to encapsulate the logic of our applications using functions, not objects

import storeFactory from './store'
import { addDay, removeDay, setGoal } from './actions'

const store = storeFactory()

const state = store.getState()

store.dispatch(
	addDay("P90X", "2018-09-01")
)

store.dispatch(
	removeDay("2018-09-01")
)

store.dispatch(
	setGoal(55)
)
