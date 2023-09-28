import { Dropdown } from "react-bootstrap";
import '../style/Home.css'
import OtherNavs from "./OtherNavs";

function Register (){

  return(
    <div class="registerBackground">
      <OtherNavs/>
      <br/><br/><br/><br/><br/><br/><br/><br/>
        <Dropdown>
          <Dropdown.Toggle variant = "success" id="dropdown-basic">
            Role 
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href = "addCustomerForm">Customer</Dropdown.Item>
            <Dropdown.Item href = "addDriverForm">Driver</Dropdown.Item>
            <Dropdown.Item href ="admin">Admin</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )

}

export default Register;