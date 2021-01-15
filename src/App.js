import Web3 from "web3";
import React, { useEffect } from "react";
import { OpenSeaPort, Network } from 'opensea-js'
import { useDispatch, connect } from 'react-redux'
import { Button } from "react-bootstrap";
import ExampleActions from './stores/example/action'
import { firstFive } from './stores/example/selector'


const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/2f8da807a28b4b8b925f520dd58b1b5a')
const seaport = new OpenSeaPort(provider, {
  networkName: Network.Rinkeby,
  // apiBaseUrl:'https://rinkeby.infura.io/v3',
  // apiKey:'2f8da807a28b4b8b925f520dd58b1b5a'
})

const App = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    async function prefetch() {
      dispatch(ExampleActions.fetchUsers())
    }

    prefetch()
  },[])

  return (
    <Button
      variant="primary"
      onClick={() => {
        console.log(props.five)
      }}>
      Button
    </Button>
  );
}

const mapStateToProps = (state) => {
  return {
    five: firstFive(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFiveUsers: () => {
      console.log('dispatch function')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// ------- MyCollectible ---------

//Events
// ApproveForAll
// OwnershipTransferred
// TransferBatch
// TransferSingle
// URI

//Functions

// balanceOf
// balanceOfBatch
// batchMint
// create
// creators
// isApprovedForAll
// isOwner
// mint
// name
// owner
// renounceOwnership
// safeBatchTransferFrom
// safeTransferFrom
// setApprovalForAll
// setBaseMetadataURI
// setCreator
// supportInterface
// symbol
// tokenSupply
// totalSupply
// transferOwnership
// uri
// contractURI

//------ MyLootBox ------

//Events
// LootBoxOpened
// OwnershipTransferred
// Paused
// PauseAdded
// PauseRemoved
// Unpaused
// Warning

//Functions
// addPauser
// balanceOf
// canMint
// classIsPreminted
// classToTokenIds
// factorySchemaName
// isApprovedForAll
// isOwner
// isPauser
// mint
// nftAddress
// numOptions
// optionToSettings
// optionToTokenID
// owner
// pause
// paused
// proxyRegistryAddress
// renounceOwnership
// renouncePauser
// safeTransferFrom
// supportsFactoryInterface
// transferOwnership
// unpause
// setClassForTokenId
// setTokenIdsForClass
// resetClass
// setTokenIdsForClasses
// setOptionSettings
// setSeed
// open
// withdraw
// name
// symbol
// uri
