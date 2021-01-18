import React, { useEffect } from "react";
import { useDispatch, connect } from 'react-redux'
import { Header, MetaMask } from '../components';


const HomeContainer = ({ web3 }) => {
    return (
        <>
            <Header wallet={web3} />
            <>
                {!web3 &&
                    <MetaMask />
                }
            </>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        web3: state.ethereum.web3 !== undefined ? true : false
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getFiveUsers: () => {
//             console.log('dispatch function')
//         }
//     }
// }

export default connect(mapStateToProps, null)(HomeContainer);