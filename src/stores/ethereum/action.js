import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    setupWeb3: null,
    initializeWeb3: ['provider'],
})

export const EthereumTypes = Types;
export const EthereumActions = Creators; 