import { takeLatest, all } from 'redux-saga/effects'
import { EthereumTypes } from '../stores/ethereum/action'
import { setupWeb3} from './ethereum';

export default function* root() {
    yield all([
        takeLatest(EthereumTypes.SETUP_WEB3, setupWeb3),
    ])
} 