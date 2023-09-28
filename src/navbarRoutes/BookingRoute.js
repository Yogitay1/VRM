import {Link} from 'react-router-dom';
import '../App.css'

const BookingRoute=()=>{
  
    return(


<nav>
<div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/viewAllBooking"} className="nav-link">
              Bookings
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/addBooking"} className="nav-link">
              Add Booking
            </Link>
          </li>


          <li className="nav-item">
            <Link to={"/hello"} className="nav-link">
              hello
            </Link>
          </li>
        </div>
      </nav>

    )
}
export default BookingRoute;