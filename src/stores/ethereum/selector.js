import { createSelector } from 'reselect'

const instances = (state) => state.ethereum;

export const getWeb3 = createSelector(
    [instances],
    (instance) => instance.web3
)

export const getOpensea = createSelector(
    [instances],
    (instance) => instance.opensea
) 