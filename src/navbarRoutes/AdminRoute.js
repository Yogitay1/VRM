import { Button } from 'bootstrap';
import {Link} from 'react-router-dom';
import '../App.css';
import AdminNav from '../pages/AdminNav';
import OtherNavs from '../pages/OtherNavs';

const AdminRoute=()=>{
  
    return(
        <div class="adminBg" >
            <AdminNav/>
        <nav>
            <div  className="navbar-nav mr-auto d-grid gap-2">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <li className="nav-item">
                    
                    <Link to={"/viewAllCustomers"} className="nav-link">
                        <button  variant="primary" size="lg">
                        Customers
                        </button>
                    </Link>
                     
                </li> 
                
                <li className="nav-item">
                    <Link to={"/getAllVehicles"} className="nav-link">
                    <button  variant="primary" size="lg">
                        Vehicles
                        </button>
                    </Link> 
                </li> 
                
                <li className="nav-item">
                    <Link to={"/viewAllDrivers"} className="nav-link">
                    <button  variant="primary" size="lg">
                        Drivers
                        </button>
                    </Link> 
                </li> 
                <li className="nav-item">
                    <Link to={"/viewAllBooking"} className="nav-link">
                    <button  variant="primary" size="lg">
                        Bookings
                        </button>
                    </Link> 
                </li> 
                <li className="nav-item">
                    <Link to={"/viewAllPayments"} className="nav-link">
                    <button  variant="primary" size="lg">
                        Payments
                        </button>
                    </Link> 
                </li> 
                <li className="nav-item">
                    <Link to={"/addVehicle"} className="nav-link">
                    <button  variant="primary" size="lg">
                        Add Vehicles
                        </button>
                    </Link> 
                </li> 
                <li className="nav-item">
                    <Link to={"/addCustomerForm"} className="nav-link">
                    <button  variant="primary" size="lg">
                        Add Customer
                        </button>
                    </Link> 
                </li> 
                <li className="nav-item">
                    <Link to={"/addPayment"} className="nav-link">
                    <button  variant="primary" size="lg">
                        Add Payment
                        </button>
                    </Link> 
                </li> 
                <li className="nav-item">
                    <Link to={"/addBooking"} className="nav-link">
                    <button  variant="primary" size="lg">
                        Add Booking
                        </button>
                    </Link> 
                </li> 
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        </nav>
        </div>
    )

}
export default AdminRoute;