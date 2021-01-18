import { seaport } from '../config'

export const getAssets = async (contractAddress) => {
    return new Promise(async resolve => {
        const assets = await seaport.api.getAssets({
            asset_contract_address: contractAddress
        })
        resolve(assets)
    })
}

export const OpenseaAPI = {
    getAssets
}