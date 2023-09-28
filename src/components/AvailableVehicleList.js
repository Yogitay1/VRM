import React ,{useState,useEffect, useContext}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardContent from '@mui/material/CardContent';
import VehicleContext from "../context/AuthProvider";
import '../App.css';
import {retrieveAvailableVehicles}from '../actions/vehicles'
import { Grid } from '@mui/material';
import car2 from '../images/car2.jpg';
import OtherNavs from '../pages/OtherNavs';



export default function AvailableVehicleList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    const {vehicleId, setVehicleId } = useContext(VehicleContext);
    
    const [currentVehicle,setCurrentVehicle]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const vehicles = useSelector((state)=>state.vehicles);
 

    useEffect(()=>{
        dispatch(retrieveAvailableVehicles());
      },[]);

    
    const refreshData=()=>{
        setCurrentVehicle(null);
        setCurrentIndex(-1);
    }
 

    const setActiveProduct = (vehicle,index)=>{
        setCurrentVehicle(vehicle);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 
    const nav = useNavigate();

    const clickHandler=(vehicle)=>{
      setCurrentVehicle(vehicle);
      setVehicleId(vehicle.vehicleId);
      console.log(vehicleId+"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    }


return(<div className ='container mr-5 '>
         <OtherNavs/>
     <div className='card-deck'>
  {/* <div className='card text-center'> */}
  <div className='col  mb-2'>
               <div className='card h-100'>
  
      <h4 className='card-title'>Vehicles Available</h4>
     {/*  <p className='card-text'><strong></strong></p> */}

       
  <Grid 
  container
   spacing={2}
   direction="row"
   justify="flex-start"
   alignItems="flex-start" style={{margin :'.35rem' , margin :'.5rem' ,margin :'.1rem'}}
   
   >
  { vehicles?.length > 0 ? (
  vehicles.map((vehicle)=>(
    
<Grid key={vehicle.vehicleId}>

  <Card style={{ width: '18rem',margin :"2rem" ,backgroundColor:"black",color:"white" }}>
      <Card.Img variant="top" src= {car2} width="80px" height='180' />

      <Card.Body>
        <Card.Title>Book your Vehicle Now!!</Card.Title>
        <Card.Text>
        

    <CardContent>


           Id:{vehicle.vehicleId}
           <br/><br/>
           Driver Id :{vehicle.driver?.userId}<br/>
           Vehicle Number :{vehicle.vehicleNumber}<br/>
           Type :{vehicle.type}<br/>
           Category :{vehicle.category}<br/>
           Description :{vehicle.description}<br/>
           Location:{vehicle.location}<br/>
           Capacity:{vehicle.capacity}<br/>
           Charges Per Km:{vehicle.chargesPerKm}<br/>
          Fixed Charges : {vehicle.fixedCharges}<br/><br/>
          
          <Button variant="primary"  onClick={()=>{clickHandler(vehicle)}}>
         
          <Link to={"/addBooking"} className="nav-link">
              Book
            </Link>
          
            </Button>

          <br/><br/>
           </CardContent></Card.Text></Card.Body></Card></Grid>))):( 
            <CardContent>
              No Vehicles
            </CardContent>
           )}
        
        
        
    </Grid>
   
    </div>
            </div>
    </div>
    </div>
  

)
}