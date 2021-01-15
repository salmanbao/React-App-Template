import logo from '../logo.png';
import user from '../user.jpg';
import React, { useEffect } from "react";
import { generateFromString } from 'generate-avatar';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = ({ drizzle: { web3 } }) => {
    useEffect(() => {
        async function setAvatar() {

        }
        setAvatar()
    }, [])
    return (
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}OsWeed</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'space-between' }}>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="dark">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="#home">Browser</Nav.Link>
                    <Nav.Link href="#link">Account</Nav.Link>
                    <Nav.Link href="#link"><img
                        alt=""
                        src={`data:image/svg+xml;utf8,${generateFromString(web3.givenProvider.selectedAddress)}`}
                        // src={user}
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                    /></Nav.Link>

                </Nav>


            </Navbar.Collapse>
        </Navbar >
    );
}

export default Header;