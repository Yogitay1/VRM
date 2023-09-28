import {Link} from 'react-router-dom';
import '../App.css'
import OtherNavs from '../pages/OtherNavs';
const CustomerRoute=()=>{
  
    return(
<div class="custBg">

<nav>
<div  className="navbar-nav mr-auto">
      <OtherNavs/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <li className="nav-item">
            <Link to={"/getAvailableVehicles"} className="nav-link">
              <button>
              Vehicles
              </button>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to={"/getAllCustomerBookings/:uuId"} className="nav-link">
              <button>
              View Your Bookings
              </button>
            </Link>
          </li>

          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </nav>
      </div>
    )
}

export default CustomerRoute;