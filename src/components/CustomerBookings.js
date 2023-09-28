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
import { getAllCustomerBookings } from '../actions/bookings';



export default function CustomerBookings(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    const [currentBooking,setCurrentBooking]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
   /*  const {vehicleId, setVehicleId } = useContext(VehicleContext);
    
    const [currentVehicle,setCurrentVehicle]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1); */
    //this products array will hold the state of products 

    
    const bookings = useSelector((state)=>state.bookings);
 

    useEffect(()=>{
        dispatch(getAllCustomerBookings(props.uuId));
      },[props.uuId]);

    
    const refreshData=()=>{
        setCurrentBooking(null);
        setCurrentIndex(-1);
    }
 

    const setActiveProduct = (booking,index)=>{
        setCurrentBooking(booking);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 
    const nav = useNavigate();

    /* const clickHandler=(vehicle)=>{
      setCurrentVehicle(vehicle);
      setVehicleId(vehicle.vehicleId);
      console.log(vehicleId+"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    } */


return(<div className ='container mr-5 '>
         
     <div className='card-deck'>
  {/* <div className='card text-center'> */}
  <div className='col  mb-2'>
               <div className='card h-100'>
  
      <h4 className='card-title'>All Bookings</h4>
     {/*  <p className='card-text'><strong></strong></p> */}

       
  <Grid 
   
  container
   spacing={2}
   direction="row"
   justify="flex-start"
   alignItems="flex-start" style={{margin :'.35rem' , margin :'.5rem' ,margin :'.1rem'}}
   
   >
  { bookings?.length > 0 ? (
  bookings.map((booking)=>(
    
<Grid key={booking.bookingId}>

  <Card style={{ width: '18rem',margin :"2rem" ,backgroundColor:"black",color:"white" }}>
      <Card.Img variant="top" src= {car2} width="80px" height='180' />

      <Card.Body>
        <Card.Title>Your Booking</Card.Title>
        <Card.Text>
        

    <CardContent>


           Id:{booking.bookingId}
           <br/><br/>
           Booking From Date :{booking.bookingFromDate}<br/>
           Booked Till Date :{booking.bookedTillDate}<br/>
           Booking Description :{booking.bookingDescription}<br/>
           Total Cost :{booking.totalCost}<br/>
           Distance:{booking.distance}<br/>
           Customer Id:{booking.customer ?.userId}<br/>
           Vehicle Id:{booking.vehicle ?.vehicleId}<br/>
           
          
          {/* <Button variant="primary"  onClick={()=>{clickHandler(vehicle)}}>
         
          <Link to={"/addBooking"} className="nav-link">
              Book
            </Link>
          
            </Button>
 */}
          <br/><br/>
           </CardContent></Card.Text></Card.Body></Card></Grid>))):( 
            <CardContent>
              No Bookings
            </CardContent>
           )}
        
        
        
    </Grid>
   
    </div>
            </div>
    </div>
    </div>
  

)
}