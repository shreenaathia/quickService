import React from 'react';
import './Header.css';
import senecalogo from './senecalogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (
      <>

        <Navbar bg="color-0" variant="dark">
          <div className="logoContainer">
                    <img src={senecalogo} alt="web logo" />
                
                </div>
          <Nav className="mr-auto">
            <Nav.Link href="/Home" >Home</Nav.Link>
            <Nav.Link href="/Discover">Discover</Nav.Link>
            <Nav.Link href="/AboutUS">AboutUS</Nav.Link>
          </Nav>

          <Form inline>
            <div className="searchBoxSet">
            <FormControl type="text" placeholder="Search Services" className="mr-sm-2" />
  
            <Button variant="color-4">Search</Button>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
          </Form>

          <Form inline>
            <div className="accountSet">
            <Button variant="color-4">Sign In</Button>
            &nbsp;&nbsp;
            <Button variant="color-4">Sign Up</Button>
         </div>
          </Form>
        </Navbar>

      </>
    )
    /*
    return (
        <nav className="headerNav">
            <div className="mainContainer">
                <div className="logoContainer">
                    <img src={senecalogo} alt="web logo" />
                </div>

                <div className="navContainer">
                    <div className="navContainerKey">
                        <Link className="toHome" to="/">Home</Link>
                    </div>

                    <div className="navContainerKey">
                        <Link className="toDiscover" to="/Discover">Discover</Link>
                    </div>

                    <div className="navContainerKey">
                        <Link className="toAbout" to="/AboutUS">About US</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
    */
  }
}

export default Header;

