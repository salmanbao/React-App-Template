import Web3 from "web3";
import contractConfig from '../contracts/OpenSeaAsset.json';

const setupWeb3 = async () => {
    return new Promise(async (resolve) => {
        if (window.ethereum || Web3.givenProvider) {

            const web3 = new Web3(window.ethereum || Web3.givenProvider)
            await window.ethereum.enable()
            const isMetaMask = web3['currentProvider']['isMetaMask']
            const address = await getSelectedAddres(web3)
            const networkId = await getNetworkId(web3)
            const { abi, networks, deployedBytecode } = contractConfig
            const contract = new web3.eth.Contract(abi, networks[networkId].address, {
                from: address,
                data: deployedBytecode
            })
            return resolve({ web3, address, contract, isMetaMask, contractAddress: contract['_address'] })
        }
        resolve({ web3: undefined, address: null, contract: undefined, isMetaMask: false })
    })
}

const getSelectedAddres = async (web3) => {
    return new Promise(resolve => {
        if (web3['currentProvider']['selectedAddress'])
            return resolve(web3['currentProvider']['selectedAddress'])
        resolve(null)
    })
}

const getNetworkId = async (web3) => {
    return new Promise(resolve => {
        if (web3['currentProvider']['networkVersion'])
            return resolve(web3['currentProvider']['networkVersion'])
        resolve(null)
    })
}

export const EthereumAPI = {
    setupWeb3
}