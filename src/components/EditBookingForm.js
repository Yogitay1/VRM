import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';
import React , {useContext, useEffect, useState} from 'react'
import OtherNavs from '../pages/OtherNavs';
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
import '../App.css';

export default function EditBookingForm(props){
     const [booking,setBooking] =useState(props.currentBooking)


    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setBooking({...booking,[name]:value});
     }



     const submitHandler=(event)=>{event.preventDefault();
       props.updateBooking(booking.bookingId,booking);
    }
  
   

     return (
      <div>
         <OtherNavs/>
         <Form onSubmit={submitHandler}>


<Form.Label>Id</Form.Label>
<h4>{props.currentBooking.bookingId}</h4>



   <Row className="mb-3">
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
      
       <Form.Control
         type="number"
         name="vehicleId"
         placeholder="vehicleId"
         value={booking.vehicleId}
         onChange={handleInputChange}
       /> 
       </Form.Group>


       <Form.Group as={Col} md="4" >
       <Form.Label><BsFillPersonFill/>CustomerId</Form.Label>
      
       <Form.Control
       
         type="number"
         name="userId"
         placeholder="userId"
         value={booking.userId}
         onChange={handleInputChange}
         
       /> 
       </Form.Group>
       </Row>

<button>Update Booking</button>
<button onClick={()=>props.setEditing1(false)} 
className="button muted-button">Cancel</button></Form>
</div>
)
}