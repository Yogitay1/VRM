import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';
import React , {useContext, useEffect, useState} from 'react'
import OtherNavs from '../pages/OtherNavs';
import '../App.css';

export default function EditDriverForm(props){
     const [driver,setDriver] =useState(props.currentDriver)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setDriver({...driver,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateDriver(driver.userId,driver);
    }
     return (
      <div>
         <OtherNavs/>
        <form onSubmit={submitHandler}>
         

         

<label>Id</label>
<h1>{props.currentDriver.userId}</h1>



<label>driverFirstName</label>
<input 
type='text'
name='driverFirstName'
value={driver.driverFirstName}
onChange={handleInputChange}/>

<label>driverLastName</label>
<input 
type='text'
name='driverLastName'
value={driver.driverLastName}
onChange={handleInputChange}/>

<label>driverAddress</label>
<input 
type='text'
name='driverAddress'
value={driver.driverAddress}
onChange={handleInputChange}/>


<label>driverMobileNumber</label>
<input 
type='text'
name='driverMobileNumber'
value={driver.driverMobileNumber}
onChange={handleInputChange}/>

<label>driverEmailId</label>
<input 
type='text'
name='driverEmailId'
value={driver.driverEmailId}
onChange={handleInputChange}/>

<label>driverLicenseNo</label>
<input 
type='number'
name='driverLicenseNo'
value={driver.driverLicenseNo}
onChange={handleInputChange}/>

<label>password</label>
<input 
type='text'
name='password'
value={driver.password}
onChange={handleInputChange}/>

<label>role</label>
<input 
type='text'
name='role'
value={driver.role}
onChange={handleInputChange}/>

<label>username</label>
<input 
type='text'
name='username'
value={driver.username}
onChange={handleInputChange}/>



 <button>Update Driver</button>
<button onClick={()=>props.setEditing1(false)} 
className="button muted-button">Cancel</button> 

</form>
</div>
   )
}