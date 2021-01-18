import { INITIAL_STATE } from './initial'
import { createReducer } from 'reduxsauce'
import { EthereumTypes } from './action'
import { seaport } from '../../config';


export const initializeWeb3 = (state, action) => ({
    ...state,
    opensea: seaport,
    web3: action.provider.web3,
    address: action.provider.address,
    contract: action.provider.contract,
    isMetaMask: action.provider.isMetaMask,
    contractAddress: action.provider.contractAddress
})


export const EthereumReducer = createReducer(INITIAL_STATE, {
    [EthereumTypes.INITIALIZE_WEB3]: initializeWeb3
}) 