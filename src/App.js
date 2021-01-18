import React, { useEffect } from "react";
import { useDispatch ,connect} from 'react-redux';
import { EthereumActions } from './stores/ethereum/action'
import HomeContainer from './containers/homeContainer';

const App = ({ contractAddress}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function prefetch() {
      dispatch(EthereumActions.setupWeb3())
    }
    prefetch()
  }, [dispatch])

  return (
    <HomeContainer />
  );
}

const mapStateToProps = (state) => {
  return {
    contractAddress: state.ethereum.contractAddress !== undefined ? state.ethereum.contractAddress : undefined
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getFiveUsers: () => {
//             console.log('dispatch function')
//         }
//     }
// }

export default connect(mapStateToProps, null)(App);


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
