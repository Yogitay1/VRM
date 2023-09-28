import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { addDriver } from '../actions/drivers';
import DriverService from '../services/DriverService';
import { BsFillPersonFill} from "react-icons/bs";
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { FaPhoneAlt} from "react-icons/fa";
import OtherNavs from '../pages/OtherNavs';
import '../App.css';
import AdminNav from '../pages/AdminNav';
export default function AddDriverForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
  userId:0,
  user:{
   password:'',
   role:'',
  userId:0,
  username:''},


   driverFirstName:'',
   driverLastName:'',
   driverAddress:'',
   driverMobileNumber:0,
   driverEmailId :'',
   driverLicenseNo:0,
   //password:'',
   // role:'',
   // userId:0,
   // username:'' 
}
const initialUserFormState={role:'',
userId:0,
password:'',
username:''}

const [user,setUser] =useState(initialUserFormState);
const handleUserIdChange=(event)=>{
   const{name,value}=event.target;
   setUser({...user,[name]:value});
   setDriver({...driver,...user});
}

 
const [driver,setDriver]=useState(initialFormState);
//a function which is universal for all changes 


const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setDriver({...driver,[name]:value});
}


useEffect(()=>{
   setDriver({...driver,user})
},[user])
 
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
}
*/
const submitHandler=(event)=>{event.preventDefault();

 console.log(JSON.stringify(driver)+'from adddriverform')
//props.addDriver(driver);
dispatch(addDriver(driver));
setDriver(initialFormState);

}
return (<>

<div class="addDriver">
   <AdminNav/>
   <br/> <br/> 
               <div class='Background '> 
                  <Form onSubmit={submitHandler}>

                      <Row className="mb-3">
                           <Form.Group as={Col} md="4" >
                           <Form.Label><BsFillPersonFill/>First Name</Form.Label>
                           <Form.Control
                              required
                              type='text'
                              placeholder="driverFirstName"
                              name='driverFirstName'
                              value={driver.driverFirstName}
                              onChange={handleInputChange}/>
                           </Form.Group>


                        <Form.Group as={Col} md="4" >
                        <Form.Label><BsFillPersonFill/>Last Name</Form.Label>
                        <Form.Control
                              required
                              type='text'
                              name='driverLastName'
                              placeholder="driverLastName"
                              value={driver.driverLastName}
                              onChange={handleInputChange}/>
                        </Form.Group>


         
                              <Form.Group as={Col} md="4" >
                              <Form.Label>Address</Form.Label>
                              <Form.Control
                                 required
                                 type='text'
                                    name='driverAddress'
                                    placeholder="driverAddress"
                                    value={driver.driverAddress}
                                    onChange={handleInputChange}/>
                              </Form.Group>
                              </Row>


                        <Row className="mb-3">
                        <Form.Group as={Col} md="4" >
                        <Form.Label><FaPhoneAlt/>Mobile Number</Form.Label>
                        <Form.Control
                                 required
                                 type='text'
                                 name='driverMobileNumber'
                                 placeholder="driverMobileNumber"
                                 value={driver.driverMobileNumber}
                                 onChange={handleInputChange}/>
                                 </Form.Group>
                     
              
               
         

                           <Form.Group as={Col} md="4" >
                           <Form.Label>Email Id</Form.Label>
                           <Form.Control
                                    required
                                    type='text'
                                    name='driverEmailId'
                                    placeholder="driverEmailId"
                                    value={driver.driverEmailId}
                                    onChange={handleInputChange}/>
                           </Form.Group>



                           <Form.Group as={Col} md="4" >
                           <Form.Label>License No</Form.Label>
                           <Form.Control
                                    required
                                    type='text'
                                    name='driverLicenseNo'
                                    placeholder="driverLicenseNo"
                                    value={driver.driverLicenseNo}
                                    onChange={handleInputChange}/>
                           </Form.Group>
                           </Row>


                        <Row className="mb-3">
                        <Form.Group as={Col} md="4" >
                        <Form.Label><BsFillPersonFill/>Id</Form.Label>
                        <Form.Control
                              
                                 type='number'
                                 name='userId'
                                 placeholder="userId"
                                 value={driver.userId}
                                 onChange={handleUserIdChange}/>
                        </Form.Group>


         
                        <Form.Group as={Col} md="4" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                                 required
                                 type='password'
                                 name='password'
                                 placeholder="password"
                                 value={driver.password}
                                 onChange={handleUserIdChange}/>
                        </Form.Group>



                           <Form.Group as={Col} md="4" >
                              <Form.Label><BsFillPersonFill/>Role</Form.Label>
                              <Form.Control
                                 required
                                 type='text'
                                 name='role'
                                 placeholder="role"
                                 value="Driver"/>
                                 
                                 </Form.Group>
                                 </Row>



         
                           <Form.Group as={Col} md="4" >
                           <Form.Label><BsFillPersonFill/>Username</Form.Label>
                           <Form.Control
                                    required
                                    type='text'
                                    name='username'
                                    placeholder="username"
                                    value={driver.username}
                                    onChange={handleUserIdChange}/>
                                    </Form.Group>
                                    <br></br>
                                    <br></br>


                                    <button>Register</button>
                                    <br/> <br/> <br/>
                                         </Form>
           
         </div>
         </div>
         <br/> <br/> <br/>
</>
)


}