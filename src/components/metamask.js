import React from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { EthereumActions } from '../stores/ethereum/action'

const MetaMask = () => {
    const dispatch = useDispatch()
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <SignIn>Sign in to your wallet.</SignIn>
                <div>
                    <div>
                        <div>
                            <MetaMaskImage>
                                <img src="https://storage.googleapis.com/opensea-static/logos/metamask.png" />
                            </MetaMaskImage>
                            <ButtonWrapper>
                                <Button onClick={()=> {
                                    dispatch(EthereumActions.setupWeb3())
                                }} variant="primary" size="lg">Sign In</Button>
                            </ButtonWrapper>
                        </div>
                    </div>
                    <Note>Your wallet , powered by
                        <a href="https://metamask.io/download.html" rel="noreferrer" target="_blank"> MetaMask</a>
                        , will be used to securely store your digital goods and cryptocurrencies.
                    </Note>
                </div>
            </div>
        </div>
    );
}

export default MetaMask;

const SignIn = styled.p`
  font-size: 1.8rem;
  padding-top:40px;
  text-align:center;
`;

const Note = styled.p`
  font-size: 18px;
  text-align:center;
`;

const MetaMaskImage = styled.div`
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
`;

const ButtonWrapper =styled.div`
display: flex;
flex-direction: row;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
padding: 55px 20px 15px;
`
