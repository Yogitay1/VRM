import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { addCustomer } from '../actions/customers';
import CustomerService from '../services/CustomerService';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { BsFillPersonFill} from "react-icons/bs";
import {BsFillTelephoneFill } from "react-icons/bs";
import{BsFillChatFill} from "react-icons/bs";
import OtherNavs from '../pages/OtherNavs';
import '../App.css';
import AdminNav from '../pages/AdminNav';

export default function AddCustomerForm(props){
   
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


   customerFirstName:'',
   customerLastName:'',
   customerAddress:'',
   customerMobileNumber:0,
   customerEmailId :'',
  
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
   setCustomer({...customer,...user});
}

 
const [customer,setCustomer]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setCustomer({...customer,[name]:value});
}
useEffect(()=>{
   setCustomer({...customer,user})
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

 console.log(JSON.stringify(customer)+'from addcustomerform')
 
//props.addDriver(driver);
dispatch(addCustomer(customer));
localStorage.setItem('customerDetails',JSON.stringify(customer));
setCustomer(initialFormState);

}
return (<>
<div class="addCust">
<AdminNav/>
<br/><br/><br/><br/>
<Form onSubmit={submitHandler}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Label><BsFillPersonFill/>First Name</Form.Label>
          <Form.Control
                required
                type='text'
                name='customerFirstName'
                placeholder="customerFirstName"
                value={customer.customerFirstName}
                onChange={handleInputChange}/>
           </Form.Group>


         <Form.Group as={Col} md="4" >
          <Form.Label ><BsFillPersonFill/>Last Name</Form.Label>
          <Form.Control
            required
            type='text'
            name='customerLastName'
            placeholder="customerLastName"
            value={customer.customerLastName}
            onChange={handleInputChange}/>
           
          </Form.Group>



          <Form.Group as={Col} md="4" >
          <Form.Label for="customerAddress">Address</Form.Label>
           <Form.Control
               required
                type='text'
                name='customerAddress'
                placeholder="customerAddress"
                value={customer.customerAddress}
                onChange={handleInputChange}/>
            </Form.Group>
            </Row>

        <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          <Form.Label ><BsFillTelephoneFill/>Mobile Number</Form.Label>
           <Form.Control
               required
                type='text'
                name='customerMobileNumber'
                placeholder="customerMobileNumber"
                value={customer.customerMobileNumber}
                onChange={handleInputChange}/>
            </Form.Group>



    <Form.Group as={Col} md="4" >
          <Form.Label><BsFillChatFill/>Email Id</Form.Label>
           <Form.Control
               required
               type='text'
               name='customerEmailId'
               placeholder="customerEmailId"
               value={customer.customerEmailId}
               onChange={handleInputChange}/>
        </Form.Group>


        <Form.Group as={Col} md="4" >
          <Form.Label><BsFillPersonFill/>Id</Form.Label>
           <Form.Control
               
               type='number'
               name='userId'
               placeholder="userId"
               value={customer.userId}
               OnChange={handleUserIdChange}/>
        </Form.Group>

          </Row>


          <Row className="mb-3">
          <Form.Group as={Col} md="4" >
           <Form.Label>Password</Form.Label>
           <Form.Control
               required
               type='password'
               name='password'
               placeholder="password"
               value={customer.password}
               onChange={handleUserIdChange}/>
             
            </Form.Group>


          <Form.Group as={Col} md="4" >
           <Form.Label > <BsFillPersonFill/>role</Form.Label>
           <Form.Control
               required
               type='text'
               name='role'
               placeholder="role"
               value="Customer"/>
             
            </Form.Group>


     <Form.Group as={Col} md="4" >
           <Form.Label ><BsFillPersonFill/>username</Form.Label>
           <Form.Control
               required
               type='text'
               name='username'
               value={customer.username}
               onChange={handleUserIdChange}/>
             </Form.Group>
             </Row>
    <button>Submit</button>
            </Form>


              <p>
                Already registered?<br/>
                <Link to ="/customerlogin">Login In</Link>
              </p>
              <br/><br/><br/><br/><br/>
</div>

</>
)


}