import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardContent from '@mui/material/CardContent';
import '../App.css';
import {retrieveVehicles,}from '../actions/vehicles'
import { Grid } from '@mui/material';
import car2 from '../images/car2.jpg';
import AdminNav from '../pages/AdminNav';


export default function VehicleList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentVehicle,setCurrentVehicle]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const vehicles = useSelector((state)=>state.vehicles);
     

    useEffect(()=>{
        dispatch(retrieveVehicles());
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


return(<div class="vehicle" className ='container mr-5 '>
         <AdminNav/>
         <br/>
     <div className='card-deck'>
  {/* <div className='card text-center'> */}
  <div className='col  mb-2'>
               <div className='card h-100'>
  
      <h4 className='card-title'>All Vehicles</h4>
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
        <Card.Title>Card Title</Card.Title>
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
          
            <div>
            <button 
        
        onClick={()=>{props.editVehicle(vehicle)}}
        className="button muted-button" >
          
          <Link to={"/updateVehicle/:id"} className="nav-link">
              Edit
            </Link>
          
          </button>
        <button 
        
            onClick={()=>{props.deleteVehicle(vehicle.vehicleId)}}
        className="button muted-button">Delete
        </button>

          <br/><br/>
          </div>
           </CardContent></Card.Text></Card.Body></Card></Grid>))):( 
            <CardContent>
              No Vehicles
            </CardContent>
           )}
        
        
        
    </Grid>
    </div>
            </div>
    </div>
    <br/><br/>
    </div>
  

)
}