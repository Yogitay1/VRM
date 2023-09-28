import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';
import React , {useContext, useEffect, useState} from 'react'
import OtherNavs from '../pages/OtherNavs';
import '../App.css';
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

export default function EditVehicleForm(props){
     const [vehicle,setVehicle] =useState(props.currentVehicle)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setVehicle({...vehicle,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateVehicle(vehicle.vehicleId,vehicle);
    }
  
   

     return (
      <div>
         <OtherNavs/>
         <Form onSubmit={submitHandler}>

<Form.Label>Id</Form.Label>

<h1>{props.currentVehicle.vehicleId}</h1>

<Row className="mb-3">
<Form.Group as={Col} md="4" >
   <Form.Label>DriverId</Form.Label>
         <Form.Control
         
         type="number"
         name="userId"
         placeholder="userId"
         value={vehicle.userId}
         onChange={handleInputChange}/>
</Form.Group>



   <Form.Group as={Col} md="4" >
       <Form.Label>Vehicle Number</Form.Label>
          <Form.Control
         required
         type="number"
         name="vehicleNumber"
         placeholder="vehicleNumber"
         value={vehicle.vehicleNumber}
         onChange={handleInputChange}/>
       </Form.Group>
       </Row>


   <Row className="mb-3">
  <Form.Group as={Col} md="4" >
      <Form.Label>Type</Form.Label>
       <Form.Control
         required
         type="text"
         name="type"
         placeholder="type"
         value={vehicle.type}
         onChange={handleInputChange}/>
   </Form.Group>


 <Form.Group as={Col} md="4" >
   <Form.Label>Category</Form.Label>
       <Form.Control
         required
         type="text"
         name="category"
         placeholder="category"
         value={vehicle.category}
         onChange={handleInputChange}/>
     
 </Form.Group>



   <Form.Group as={Col} md="4" >
       <Form.Label>Description</Form.Label>
       <Form.Control
         required
         type='text'
         name='description'
         placeholder="description"
         value={vehicle.description}
         onChange={handleInputChange}/>
   </Form.Group>
   </Row>

  
   <Row className="mb-3">
   <Form.Group as={Col} md="4" >
       <Form.Label>Location</Form.Label>
       <Form.Control
         type='text'
         name='location'
         placeholder="location"
         value={vehicle.location}
         onChange={handleInputChange}/>
        
   </Form.Group>




   <Form.Group as={Col} md="4" >
       <Form.Label>Capacity</Form.Label>
       <Form.Control
         required
         type='text'
         name='capacity'
         placeholder="capacity"
        value={vehicle.capacity}
       onChange={handleInputChange}/>
       
       </Form.Group>


  <Form.Group as={Col} md="4" >
      <Form.Label>Charges Per Km</Form.Label>
       <Form.Control
         type='number'
         name='chargesPerKm'
         placeholder="chargesPerKm"
         value={vehicle.chargesPerKm}
         onChange={handleInputChange}/>
   </Form.Group>
   
   </Row>

   <Row className="mb-3">

       <Form.Group as={Col} md="4" >
       <Form.Label>FixedCharges</Form.Label>
       <Form.Control
         type='number'
         name='fixedCharges'
         placeholder="fixedCharges"
         value={vehicle.fixedCharges}
         onChange={handleInputChange}/>
  </Form.Group>
  </Row>
  
  <button>Update Vehicle</button>
 <button onClick={()=>props.setEditing1(false)} 
className="button muted-button">Cancel</button>
</Form>
</div>
   )




}