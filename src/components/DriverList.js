import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardContent from '@mui/material/CardContent';

import {retrieveDrivers,}from '../actions/drivers'
import { Grid } from '@mui/material';
import driver1 from '../images/driver1.jpg';
import '../App.css'
import OtherNavs from '../pages/OtherNavs';
import AdminNav from '../pages/AdminNav';

export default function DriverList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentDriver,setCurrentDriver]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this drivers array will hold the state of products 
    const drivers = useSelector((state)=>state.drivers);
     

    useEffect(()=>{
        dispatch(retrieveDrivers());
      },[]);

    
    const refreshData=()=>{
        setCurrentDriver(null);
        setCurrentIndex(-1);
    }
 

    const setActiveDriver = (driver,index)=>{
        setCurrentDriver(driver);
        setCurrentIndex(index);

    }

return( 
<div class="vehicle">
<AdminNav/>
<div  class='listBackground '>  

 <div className ='container mr-5 '    class='listBackground'> 
         
{/* <div className='card-deck'> */}
{/* <div className='card text-center'> */}
<div className='col  mb-2'>
          <div className='card h-100'>

 <h4 className='card-title'>All Drivers</h4>
 <p className='card-text'><strong></strong></p>
 
 <Grid 
   
   container
    spacing={2}
    direction="row"
    justify="flex-start"
    alignItems="flex-start" style={{margin :'.35rem' , margin :'.5rem' ,margin :'.1rem'}}
    >
        {drivers?.length > 0 ? (
    drivers.map((driver)=>(
    <Grid key={driver.userId}>
        
      <Card style={{ width: '18rem',margin :"2rem" ,backgroundColor:"black",color:"white" }}>
      <Card.Img variant="top" src= {driver1} width="100px" height='180' />
      
      <Card.Body>
        <Card.Title>Id:{driver.userId}</Card.Title>
        <Card.Text>

         <CardContent>
            
        Id:{driver.driverFirstName}<br/>
        Last Name:{driver.driverLastName}<br/>
        Address :{driver.driverAddress}<br/>
        Mobile Number:{driver.driverMobileNumber}<br/>
       Email Id:{driver.driverEmailId}<br/>
        License No:{driver.driverLicenseNo}<br/>
        Id:{driver.userId}<br/>
        Password:{driver.password}<br/>
        Role:{driver.role}<br/>
        Username:{driver.username}<br/><br/>
        
        <Button   onClick={()=>{props.editDriver(driver)}}
         variant="primary" className="button muted-button">
            <Link to={"/updateDriverNum/:id"} className="nav-link">
              Edit
            </Link>
            </Button>
        
        <Button  onClick={()=>{props.deleteDriver(driver.userId)}}
         variant="primary" className="button muted-button">Delete</Button>
        
        
        
        <br/><br/>
        </CardContent></Card.Text></Card.Body></Card></Grid>))):( 
            <CardContent>
              No Drivers
            </CardContent>
           )}
        
        
        
    </Grid>
    </div>
    </div>
            </div>
    </div>
 </div>


)
}