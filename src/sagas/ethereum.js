import { put, call } from 'redux-saga/effects'
import { EthereumAPI, OpenseaAPI } from '../api';
import { EthereumActions } from '../stores/ethereum/action';
import { AssetsActions } from '../stores/assets/action'

export function* setupWeb3() {
    const { web3, address, contract, isMetaMask, contractAddress} = yield call(EthereumAPI.setupWeb3)
    yield put(EthereumActions.initializeWeb3({ web3, address, contract, isMetaMask, contractAddress }))
    const assets = yield call(OpenseaAPI.getAssets, contractAddress)
    yield put(AssetsActions.saveAssets({ assets }))
}