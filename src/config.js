import Web3 from "web3";
import { OpenSeaPort, Network } from 'opensea-js';
export const HTTP_PROVIDER = 'https://rinkeby.infura.io/v3/2f8da807a28b4b8b925f520dd58b1b5a';
export const OpenSeaAsset = './contracts/OpenSeaAsset.json';
const provider = new Web3.providers.HttpProvider(HTTP_PROVIDER)

export const seaport = new OpenSeaPort(provider, {
    networkName: Network.Rinkeby,
    // apiBaseUrl:'https://rinkeby.infura.io/v3',
    // apiKey:'2f8da807a28b4b8b925f520dd58b1b5a'
});