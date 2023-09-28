import { render } from '@testing-library/react';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import logo from "../images/logo.jpg";
import '../App.css'

  export default  function MainPageNav() {

  //const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div>
    <Nav  className="justify-content-end" variant="pills" activeKey="Home" >
      
      <Nav.Item>
        <Nav.Link className='flex-right' eventKey="Home" href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="AboutUs" title="Item" href="/aboutUs">
          About Us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="ContactUs" title="Item"  href="/contactUs">
          Contact Us
        </Nav.Link>
      </Nav.Item>
      <NavDropdown  title="GetStarted" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" href="/register">Register</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" href="/login">login</NavDropdown.Item>
        {/* <NavDropdown.Item eventKey="4.3">Booking</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Payment</NavDropdown.Item> */}
      </NavDropdown>
{/* <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          Register/login
        </Nav.Link>
      </Nav.Item> */}
       <Nav.Item>
      

          
            
      </Nav.Item>
      </Nav>
      <Nav>
      <Nav.Item class = "logo5" className="justify-content-start">
      
      <img src={logo} width = "100px"></img> 

  </Nav.Item>
    </Nav>
      </div>

  );
}