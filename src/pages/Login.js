
import { Dropdown } from "react-bootstrap";
import '../App.css'
import OtherNavs from "./OtherNavs";

function Login (){

  return(
    <div class="loginBg">
      <OtherNavs/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Dropdown>
          <Dropdown.Toggle variant = "success" id="dropdown-basic">
           Role
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href = "customerLogin">Customer</Dropdown.Item>
            <Dropdown.Item href = "adminLogin">Admin</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
  )

}

export default Login;