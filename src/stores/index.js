import { combineReducers } from 'redux'
import configureStore from './createStore'
import rootSaga from '../sagas'
import { EthereumReducer } from './ethereum/reducer';
import { AssetsReducer } from './assets/reducer';

export default () => {
    const rootReducer = combineReducers({
        ethereum: EthereumReducer,
        assets: AssetsReducer

    })

    return configureStore(rootReducer, rootSaga)
}