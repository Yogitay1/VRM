import {Link} from 'react-router-dom';
const VehicleRoute=()=>{
  
    return(

<nav>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/getAllVehicles"} className="nav-link">
              Vehicles
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addVehicle"} className="nav-link">
              Add Vehicle
            </Link>
          </li>
        </div>
      </nav>
    )
}

export default VehicleRoute;