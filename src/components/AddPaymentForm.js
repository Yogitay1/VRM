import React,{useContext, useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addPayment } from '../actions/payments';
import VehicleContext from '../context/AuthProvider';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {FcCameraIdentification} from "react-icons/fc";
import {MdPayments} from "react-icons/md"
import {MdOutlineDateRange} from "react-icons/md";
import {VscPassFilled} from "react-icons/vsc";
import OtherNavs from '../pages/OtherNavs';
import '../App.css';
import AdminNav from '../pages/AdminNav';
export default function AddPaymentForm(props){
   
const dispatch=useDispatch();

   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */
   const {paymentId, setPaymentId} = useContext(VehicleContext)
const {bookingId} = useContext(VehicleContext);

const initialFormState = {
   booking:{
      bookingId:0,
   },
  
    paymentId:0,
    paymentMode:'',
   paymentDate:'',
   paymentStatus:''

}

/* const initialBookingFormState = {
   bookingId:0
}

const[booking, setBooking] = useState(initialBookingFormState);
const handleBookingIdChange=(event)=>{
 const{name,value}=event.target;
 setBooking({...booking,[name]:value});
 setPayment({...payment,...booking});


} */
const initialBookingFormState={
   bookingId:0
}

const [booking, setBooking] =useState(initialBookingFormState);
const handleBookingIdChange=(event)=>{
   const{name,value}= event.target;
   setBooking({...booking,[name]:value});
   setPayment({...payment,...booking});
}

const [currentPayment, setCurrentPayment] = useState({});
const [payment,setPayment]=useState(initialFormState);

const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setPayment({...payment,[name]:value});
}
/* 
useEffect(()=>{
   setPayment({...payment, booking})
},[booking])
 */



useEffect(()=>{
   setPayment({...payment, booking})
},[booking])


 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

/* const submitHandler=(event)=>{event.preventDefault();
console.log(JSON.stringify(payment)+'from addpaymentform')

dispatch(addPayment(payment));
setPayment(initialFormState); */

const nav= useNavigate();
//event=payment
const submitHandler=(event)=>{event.preventDefault();
   console.log(JSON.stringify(payment)+'from addpaymentform')
   dispatch(addPayment(payment));
  
   setPayment(initialFormState);
   }


return (<>
<AdminNav/>
<Form onSubmit={submitHandler}>

<Row className="mb-3">
  <Form.Group as={Col} md="4" >
  <Form.Label for="PaymentId">
      <FcCameraIdentification/>
      Payment Id</Form.Label>
      <Form.Control
      
      type="number"
      name="paymentId"
      placeholder="paymentId"
      value={payment.paymentId}
      onChange={handleInputChange}
    />
  </Form.Group>


   <Form.Group as={Col} md="4" >
    <Form.Label for="BookingId" >
      <FcCameraIdentification/>
      Booking Id</Form.Label>
    <Form.Control
      
      type="number"
      name="bookingId"
      placeholder="bookingId"
      value={payment.booking.bookingId}
      onChange={handleBookingIdChange}
     />
    </Form.Group>
    

    <Form.Group as={Col} md="4" >
    <Form.Label for="PaymentMode" >
      <MdPayments/>
     Payment Mode</Form.Label>
      
      <select name="paymentMode" id="paymentMode" value={payment.paymentMode}
        onChange={handleInputChange}
        >
        
        <option value="Type">Type</option>
         <option value="Cash">Cash</option>
         <option value="Card">Card</option>
    </select>
    </Form.Group> 
      </Row>



    <Row className="mb-3">
    <Form.Group as={Col} md="4" >
    <Form.Label for="PaymentDate" >
      <MdOutlineDateRange/>
      Payment Date</Form.Label>
    <Form.Control
      required
        type="date"
        name="paymentDate"
        placeholder="paymentDate"
        value={payment.paymentDate}
        onChange={handleInputChange}
      /> 
     </Form.Group>
     </Row>

     <Row className="mb-3">
     <Form.Group as={Col} md="4" >
    <Form.Label for="paymentStatus" >
    <VscPassFilled/>
      Payment Status</Form.Label>
    <Form.Control
      required
      type="text"
      name="paymentStatus"
      placeholder="PaymentStatus"
      value={payment.paymentStatus}
      onChange={handleInputChange}
     />
    </Form.Group>
    </Row>
   
     
     <button >Add Payment</button>
     <button>
      <Link to={"/thanks" }>Next Page</Link>
     </button>
     </Form>
</>

)

}