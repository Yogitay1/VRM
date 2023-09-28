import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addVehicle } from '../actions/vehicles';
import Form from 'react-bootstrap/esm/Form';
import Row from  'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { BsFillPersonFill} from "react-icons/bs";
import OtherNavs from '../pages/OtherNavs';
import '../App.css';
import AdminNav from '../pages/AdminNav';

export default function AddVehicleForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   vehicleId:0,
   driver: {
    userId:0
},
   vehicleNumber:'',
   type: '',
   category: '',
   description : '',
   location : '',
   capacity : '',
   chargesPerKm : 0,
   fixedCharges : 0



}

const initialDriverFormState={
    userId:0
}

const [driver, setDriver] =useState(initialDriverFormState);
const handleDriverIdChange=(event)=>{
    const{name,value}= event.target;
    setDriver({...driver,[name]:value});
    setVehicle({...vehicle,...driver});
}
 
const [vehicle,setVehicle]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setVehicle({...vehicle,[name]:value});
}

useEffect(()=>{
    setVehicle({...vehicle, driver})
},[driver])
 
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

const submitHandler=(event)=>{event.preventDefault();
 console.log(JSON.stringify(vehicle)+'from addvehicleform')
 
//props.addProduct(product);
dispatch(addVehicle(vehicle));
//props.addVehicle(vehicle);
setVehicle(initialFormState);

}
return (<>
<AdminNav/>
<Form onSubmit={submitHandler}>
  <Row className="mb-3">
   <Form.Group as={Col} md="4" >
         <Form.Label><BsFillPersonFill/>Id</Form.Label>
            <Form.Control
           
            type="number"
            name="vehicleId"
            placeholder="vehicleId"
            value={vehicle.vehicleId}
            onChange={handleInputChange}/>
   </Form.Group>


   <Form.Group as={Col} md="4" >
      <Form.Label><BsFillPersonFill/>Driver Id</Form.Label>
           <Form.Control
           
            type="number"
            name="userId"
            placeholder="userId"
            value={driver.userId}
            onChange={handleDriverIdChange}/>
   </Form.Group>



      <Form.Group as={Col} md="4" >
          <Form.Label>Vehicle Number</Form.Label>
             <Form.Control
            required
            type="text"
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

      

          <Form.Group as={Col} md="4" >
          <Form.Label>Fixed Charges</Form.Label>
          <Form.Control
            type='number'
            name='fixedCharges'
            placeholder="fixedCharges"
            value={vehicle.fixedCharges}
            onChange={handleInputChange}/>
     </Form.Group>
          


<br></br>
<br></br>

<button>Add New Vehicle</button>
</Form>

</>
)


}