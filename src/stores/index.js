import { combineReducers } from 'redux'
import configureStore from './createStore'
import rootSaga from '../sagas'
import { Examplereducer } from './example/reducer'

export default () => {
    const rootReducer = combineReducers({
        example: Examplereducer,
    })

    return configureStore(rootReducer, rootSaga)
}