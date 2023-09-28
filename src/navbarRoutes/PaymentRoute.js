import {Link} from 'react-router-dom';
const PaymentRoute=()=>{
  
    return(

<nav>
<div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/viewAllPayments"} className="nav-link">
              Payments
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addPayment"} className="nav-link">
              Add Payment
            </Link>
          </li>
        </div>
      </nav>
    )
}
export default PaymentRoute;