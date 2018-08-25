import storeFactory from './store'
import { suggestRoutineNames } from './actions'

const store = storeFactory()

store.dispatch(
	suggestRoutineNames('hea')
)
