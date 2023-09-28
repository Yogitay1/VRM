import React,{useContext, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking } from '../actions/bookings';
import { Link } from 'react-router-dom';
import VehicleContext from "../context/AuthProvider";
import AuthProvider from '../context/AuthProvider';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import paperClasses from '@mui/material/Paper';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import { BsFillPersonFill} from "react-icons/bs";
import {BsFillCalendarEventFill}from "react-icons/bs"
import {BsPersonPlusFill} from "react-icons/bs";
import { FaPen} from "react-icons/fa";
import { FaCar} from "react-icons/fa";
import OtherNavs from '../pages/OtherNavs';

import '../App.css';
import AddPaymentForm from './AddPaymentForm';
import AdminNav from '../pages/AdminNav';

export default function AddBookingForm(props){
   const {bookingId, setBookingId} = useContext(VehicleContext)
   const {vehicleId} = useContext(VehicleContext);
const dispatch=useDispatch();


const customer1 = localStorage.getItem('customerDetails');
const uuId = localStorage.getItem('userId');
console.log(uuId+"*******");

const initialFormState = {
   
   customer:{
      userId:uuId,
   },
   vehicle:{
      vehicleId:vehicleId,
   },
   bookingId:0,
   bookingDate:"yyyy-MM-dd",
   bookedTillDate:"yyyy-MM-dd",
   bookingDescription:"",
   totalCost:0.0,
   distance:0.0,

}

const [currentBooking,setCurrentBooking]=useState({});



const[booking,setBooking]=useState(initialFormState);
 const handleInputChange = (event)=>{
   const {name,value} =event.target;
   setBooking({...booking,[name]:value});
}
const nav= useNavigate();


const submitHandler=(event)=>{event.preventDefault();
console.log(JSON.stringify(booking)+'from addbookingform')
dispatch(addBooking(booking));
setBookingId(booking.bookingId);
setBooking(initialFormState);
}

const clickHandler=(booking)=>{
   setCurrentBooking(booking);
   setBookingId(booking.bookingId);

}


return (<div >
   <AdminNav/>

<Form onSubmit={submitHandler}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Label><FaCar/>BookingId</Form.Label>
          <Form.Control
            
            type="number"
            name="bookingId"
            placeholder="bookingId"
            value={booking.bookingId}
            onChange={handleInputChange}
          />
        </Form.Group>

         <Form.Group as={Col} md="4" >
          <Form.Label for="BookingFromDate "><BsFillCalendarEventFill/>BookingFromDate </Form.Label>
          <Form.Control
            required
            type="date"
            name="bookingFromDate"
            placeholder="bookingFromDate"
            value={booking.bookingFromDate}
            onChange={handleInputChange}
           />
          </Form.Group>

          <Form.Group as={Col} md="4" >
          <Form.Label for="BookedTillDate"><BsFillCalendarEventFill/>BookedTillDate</Form.Label>
           <Form.Control
              required
              type="date"
              name="bookedTillDate"
              placeholder="bookedTillDate"
              value={booking.bookedTillDate}
              onChange={handleInputChange}
             /> 
            </Form.Group>
            </Row>

          <Row className="mb-3">
         <Form.Group as={Col} md="4" >
          <Form.Label><FaPen/>BookingDescription</Form.Label>
            {/* <InputGroup.Date id="inputGroupPrepend"></InputGroup.Date> */}
            <Form.Control
              type="text"
              name="bookingDescription"
              placeholder="bookingDescription"
              value={booking.bookingDescription}
              onChange={handleInputChange}
            /> 
            </Form.Group>


            <Form.Group as={Col} md="4" >
          <Form.Label>TotalCost</Form.Label>
            {/* <InputGroup.Date id="inputGroupPrepend"></InputGroup.Date> */}
            <Form.Control
              type="number"
              name="totalCost"
              placeholder="totalCost"
              value={booking.totalCost}
              onChange={handleInputChange}
            /> 
            </Form.Group>

            


            <Form.Group as={Col} md="4" >
            <Form.Label>Distance</Form.Label>
            {/* <InputGroup.Date id="inputGroupPrepend"></InputGroup.Date> */}
            <Form.Control
              required
              type="number"
              name="distance"
              placeholder="distance"
              value={booking.distance}
              onChange={handleInputChange}
            /> 
            </Form.Group>
            </Row>


            <Row className="mb-2">
            <Form.Group as={Col} md="4" >
            <Form.Label><FaCar/>VehicleId</Form.Label>
            {/* <InputGroup.Date id="inputGroupPrepend"></InputGroup.Date> */}
            <Form.Control
              type="number"
              name="vehicleId"
              placeholder="vehicleId"
              value={booking.vehicle.vehicleId}
            
            /> 
            </Form.Group>


            <Form.Group as={Col} md="4" >
            <Form.Label><BsFillPersonFill/>CustomerId</Form.Label>
            {/* <InputGroup.Date id="inputGroupPrepend"></InputGroup.Date> */}
            <Form.Control
               
              type="number"
              name="userId"
              placeholder="userId"
              value={booking.customer.userId}
             
              
            /> 
            </Form.Group>
            </Row>
            <button>Book Now!!</button><br/><br/>
            {/* <button><Link to={"/addPayment"} className="nav-link">
               Make Payment!!</Link></button>*/}
               <button><Link to={"/addPayment"}>Pay Now!!</Link></button>
            </Form> 
            
</div>
)
}