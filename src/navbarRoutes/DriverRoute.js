import {Link} from 'react-router-dom';
import '../App.css'
import OtherNavs from '../pages/OtherNavs';
const DriverRoute=()=>{
  
    return(
      <div>
      <OtherNavs/>
<nav>

<div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/viewAllDrivers"} className="nav-link">
              Drivers
            </Link> 
          </li> 



          <li className="nav-item">
            <Link to={"/addDriver"} className="nav-link">
              Add Driver
            </Link>
          </li>
        </div>
      </nav>
      </div>
    )
}
export default DriverRoute;