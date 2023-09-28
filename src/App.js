
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import './style/Home.css'
import VehicleList from './components/VehicleList'
import DriverList from './components/DriverList'
import BookingList from './components/BookingList'
import PaymentList from './components/PaymentList'
import CustomerList from './components/CustomerList'
import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddVehicleForm from './components/AddVehicleForm';
import EditVehicleForm from './components/EditVehicleForm';
import AddDriverForm from './components/AddDriverForm';
import EditDriverForm from './components/EditDriverForm';
import AddBookingForm from './components/AddBookingForm';
import EditBookingForm from './components/EditBookingForm';
import AddPaymentForm from "./components/AddPaymentForm";
import EditPaymentForm from './components/EditPaymentForm';
import AddCustomerForm from './components/AddCustomerForm';
import EditCustomerForm from './components/EditCustomerForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarouselComponent from './components/BootstrapCarouselComponent'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRoute from "./navbarRoutes/CustomerRoute";
import AvailableVehicleList from "./components/AvailableVehicleList";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./components/Admin";
import AdminRoute from "./navbarRoutes/AdminRoute";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Thanks from "./pages/Thanks";
import DriverRoute from "./navbarRoutes/DriverRoute";
import DriverLogin from "./pages/DriverLogin";
import CustomerBookings from "./components/CustomerBookings";
import Footer from "./pages/Footer";
import LogOut from "./pages/Logout";
import logo from "./images/logo.jpg";
import LogOut1 from "./pages/LogOut1";




function App() {
  
const [vehicles,setVehicles]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get('/getAllVehicles').then((response)=>{
      setVehicles(response.data);
    })},[])

    useEffect(()=>{apiClient.get('/getAvailableVehicles').then((response)=>{
      setVehicles(response.data);
    })},[])

    const [drivers,setDrivers]=useState([]);

    
    useEffect(()=>{apiClient.get('/viewAllDrivers').then((response)=>{
      setDrivers(response.data);
    })},[])


    
const [editing1,setEditing1]=useState(false);
const [editing2,setEditing2]=useState(false);
const [editing3,setEditing3]=useState(false);
const [editing4,setEditing4]=useState(false);
const [editing5,setEditing5]=useState(false);


const initialFormState1= {
  vehicleId:0,
  
   userId:0,

  vehicleNumber:'',
  type: '',
  category: '',
  description : '',
  location : '',
  capacity : '',
  chargesPerKm : 0,
  fixedCharges : 0



}



const [currentVehicle,setCurrentVehicle] 
     =useState(initialFormState1);

     const initialFormState2 = {
      driverFirstName:'',
      driverLastName:'',
      driverAddress:'',
      driverMobileNumber:0,
      driverEmailId :'',
      driverLicenseNo:0,
      userId:0,
      password:'',
      role:'',
      username:''
      
   
   }
   const [currentDriver,setCurrentDriver] 
        =useState(initialFormState2);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addVehicle(vehicle){
  try{
  const response=await apiClient.post('/addVehicle',vehicle);
    setVehicles([...vehicles,response.data]);
    console.log(vehicles);
    
  }catch(err){
    console.log(err)
  }
  
}

     
async function addDriver(driver){
  try{
  const response=await apiClient.post('/addDriver',driver);
    setDrivers([...drivers,response.data]);
    console.log(drivers);
    
  }catch(err){
    console.log(err)
  }
  
}


async function deleteVehicle(id){
  await apiClient.delete(`/deleteVehicle/${id}`);
    setVehicles(vehicles.filter((vehicle)=>vehicle.vehicleId !== id));
  }

  async function deleteDriver(id){

    await apiClient.delete(`/deleteDriver/${id}`);
  
      setDrivers(drivers.filter((driver)=>driver.userId !== id));
  
    }
  
  const editVehicle=(vehicle)=>{

    setEditing1(true);
      setCurrentVehicle
      ({vehicleId:vehicle.vehicleId, userId:vehicle.userId, vehcileNumber:vehicle.vehcileNumber, type:vehicle.type, 
        category:vehicle.category, description: vehicle.description, location: vehicle.location, 
        capacity: vehicle.capacity, chargesPerKm: vehicle.chargesPerKm, fixedCharges: vehicle.fixedCharges})
     
  }

  const editDriver=(driver)=>{

    setEditing2(true);

      setCurrentDriver
      ({driverFirstName:driver.driverFirstName,
        driverLastName:driver.driverLastName,
        driverAddress:driver.driverAddress,
        driverMobileNumber:driver.driverMobileNumber,
        driverEmailId:driver.driverEmailId,
        driverLicenseNo:driver.driverLicenseNo,
        userId:driver.userId,
        password:driver.password,
        role:driver.role,
        username:driver.username
        
       })
     
  }
  
  const updateVehicle = (id,updatedVehicle)=>{
  
    setEditing1(false);
    apiClient.put(`/updateVehicle/${id}`,updatedVehicle).then((response)=>
    {
  
      console.log('vehicle updated');
      setVehicles(vehicles.map((vehicle)=>
    (vehicle.vehicleId === id ? updatedVehicle : vehicle)));
    })
    
  }

  const updateDriver = (id,updatedDriver)=>{
  
    setEditing2(false);
    apiClient.put(`/updateDriverNum/${id}`,updatedDriver).then((response)=>
    {             
  
      console.log('driver updated');
      setDrivers(drivers.map((driver)=>
    (driver.userId === id ? updatedDriver : driver)));
    })
    
  } 

  const [bookings,setBookings]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get('/viewAllBooking').then((response)=>{
      setBookings(response.data);
    })},[])

    



const initialFormState3= {
   
  customer:{
     userId:0
  },
 vehicle:{
     vehicleId:0
  },
  bookingId:0,
  bookingDate:"yyyy-MM-dd",
  bookedTillDate:"yyyy-MM-dd",
  bookingDescription:"",
  totalCost:0.0,
  distance:0.0,

}

const [currentBooking,setCurrentBooking]=useState(initialFormState3);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  

async function addBooking(booking){
  try{
  const response=await apiClient.post('/addBooking',booking);
    setBookings([...bookings,response.data]);
    console.log(bookings);
    
  }catch(err){
    console.log(err)
  }
  
}




async function cancelBooking(id){
  await apiClient.delete(`/cancelBooking/${id}`);
    setBookings(bookings.filter((booking)=>booking.bookingId !== id));
  }
  


  const editBooking=(booking)=>{

    setEditing3(true);
      setCurrentBooking
      ({
        userId:booking.userId,
        vehicleId:booking.vehicleId,

        bookingId:booking.bookingId,
        bookingFromDate:booking.bookingFromDate,
        bookedTillDate:booking.bookedTillDate,
        bookingDescription:booking.bookingDescription,
        totalCost:booking.totalCost,
        distance:booking.distance
      })
     
  }
  
  const updateBooking = (id,updatedBooking)=>{
  
    setEditing3(false);
    apiClient.put(`/updateBooking/${id}`,updatedBooking).then((response)=>
    {
      console.log('booking updated');
      setBookings(bookings.map((booking)=>
    (booking.bookingId === id ? updatedBooking : booking)));
    })
    
  }
  
  const [payments,setPayments]=useState([]);

    
    useEffect(()=>{apiClient.get('/viewAllPayments').then((response)=>{
      setPayments(response.data);
    })},[])


const initialFormState4 = {
  booking:{
    bookingId:0
 },

  paymentId:0,
  paymentMode:'',
 paymentDate:''
 

}
const [currentPayment,setCurrentPayment] 
     =useState(initialFormState4);

     
async function addPayment(payment){
  try{
  const response = await apiClient.post('/addPayment',payment);
    setPayments([...payments,response.data]);
    console.log(payments);
    
  }catch(err){
    console.log(err)
  }
  
}



async function deletePayment(id){
  await apiClient.delete(`/deletePayment/${id}`);
    setPayments(payments.filter((payment)=>payment.paymentId !== id));
  }
  
  const editPayment=(payment)=>{

    setEditing4(true);
      setCurrentPayment
      ({paymentId:payment.paymentId,bookingId:payment.bookingId,paymentMode:payment.paymentMode,
        paymentdate:payment.paymentdate,paymentstatus:payment.paymentstatus})
     
  }
   
  const updatePayment = (id,updatedPayment)=>{
  
    setEditing4(false);
    apiClient.put(`/updatePayment/${id}`,updatedPayment).then((response)=>
    {
  
      console.log('payment updated');
      setPayments(payments.map((payment)=>
    (payment.paymentId === id ? updatedPayment : payment)));
    })
    
  } 
  
  const [customers,setCustomers]=useState([]);

    
    useEffect(()=>{apiClient.get('/viewAllCustomers').then((response)=>{
      setCustomers(response.data);
    })},[])

    

const initialFormState5 = {
   customerFirstName:'',
   customerLastName:'',
   customerAddress:'',
   customerMobileNumber:0,
   customerEmailId :'',

   userId:0,
   password:'',
   role:'',
   username:''
   

}
const [currentCustomer,setCurrentCustomer] 
     =useState(initialFormState5);

     
async function addCustomer(customer){
  try{
  const response=await apiClient.post('/addCustomer',customer);
    setCustomers([...customers,response.data]);
    console.log(customers);
    
  }catch(err){
    console.log(err)
  }
  
}/* 
    const deleteDriver= async (id)=>{
  await apiClient.delete(`/deleteDriver/${id}`);
    setDrivers(drivers.filter((driver)=>driver.userId !== id));
  } */


  async function deleteCustomer(id){

    await apiClient.delete(`/deleteCustomer/${id}`);
  
      setCustomers(customers.filter((customer)=>customer.userId !== id));
  
    }

  
  const editCustomer=(customer)=>{

    setEditing5(true);

      setCurrentCustomer
      ({customerFirstName:customer.customerFirstName,
        customerLastName:customer.customerLastName,
        customerAddress:customer.customerAddress,
        customerMobileNumber:customer.customerMobileNumber,
        customerEmailId:customer.customerEmailId,
        
        userId:customer.userId,
        password:customer.password,
        role:customer.role,
        username:customer.username
        
       })
     
  }
  
   const updateCustomer = (id,updatedCustomer)=>{
  
    setEditing5(false);
    apiClient.put(`/updateCustomer/${id}`,updatedCustomer).then((response)=>
    {             
  
      console.log('customer updated');
      setCustomers(customers.map((customer)=>
    (customer.userId === id ? updatedCustomer : customer)));
    })
    
  } 
  const [userId , setUserId] = useState(0);
  const uuId = localStorage.getItem('userId');
    console.log(uuId+"*********************");
    /* useEffect(()=>{apiClient.get('/getAllCustomerBookings/:id').then((response)=>{
      setUserId(bookings.map((booking)=>
      (booking.customer.userId === id ? updatedCustomer : customer)))
  
   */
  return (
    <div>
      
    <div class="App ">
    <div className='container'>
    
   {/*  <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/vehicles" className="navbar-brand" >
          React App
        </a>
        </nav> */}
    
    <div className='flex-row'>
      <div className='flex-large'>
        {editing1 ? (
        <div>
          <h2>Edit Vehicle Form </h2>
          <EditVehicleForm
           setEditing1={setEditing1}
           currentVehicle={currentVehicle}
           updateVehicle={updateVehicle}
           />
           </div>):(

    <BrowserRouter>
    
      <div className="container mt-3">
        <Routes>
        {/* <Route path='/' element={<VehicleList 
         vehicleData={vehicles} 
         editVehicle={editVehicle}
         deleteVehicle={deleteVehicle} />} ></Route> */}

        <Route path = '/' element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route path = "aboutUs" element={<AboutUs/>}/>
        <Route path="contactUs" element={<ContactUs/>}/>
        <Route path = "register" element={<Register/>}/>
        <Route path = "login"element={<Login/>}/>
        <Route path = "customerLogin"element={<CustomerLogin/>}/>
        <Route path ="adminLogin" element={<AdminLogin/>}/>
        <Route path= "driverLogin" element={<DriverLogin/>}/>
         <Route path= "customerRoute" element={<CustomerRoute/>}/>
         <Route path = "adminRoute" element={<AdminRoute/>}/>
         <Route path = "driverRoute" element={<DriverRoute/>}/>
         <Route path = "availableVehicleList" element={<AvailableVehicleList addBooking={addBooking}/>}/>
         <Route path ="vehicleList" element={<VehicleList/>}/>
         <Route path = 'getAllCustomerBookings/:uuId' element={<CustomerBookings uuId={uuId}/>}/>
         <Route exact path ="admin" element={<Admin/>}/>
         <Route path = "thanks" element={<Thanks/>}/>
         <Route path = "logOut" element={<LogOut/>}/>
         <Route path = "logOut1" element={<LogOut1/>}/>
        
         
        <Route exact path="addDriverForm" element={<AddDriverForm addDriver={addDriver}/>} />
        
         <Route path='/viewAllDrivers' element={<DriverList 
    driverData={drivers}
    editDriver={editDriver}
         deleteDriver={deleteDriver} />}>

         </Route>
         <Route path='/updateDriverNum/:id' element={<EditDriverForm setEditing2={setEditing2}
           currentDriver={currentDriver}
           updateDriver={updateDriver}/> }></Route>

          <Route exact path="addVehicle" element={<AddVehicleForm addVehicle={addVehicle}/>} />
         
         <Route path='/getAllVehicles' element={<VehicleList 
          vehicleData={vehicles} 
         editVehicle={editVehicle}
         deleteVehicle={deleteVehicle} />}>

         </Route>
         <Route path='/getAvailableVehicles' element={<AvailableVehicleList 
          vehicleData={vehicles} 
         editVehicle={editVehicle}
         deleteVehicle={deleteVehicle}
         />}>

         </Route>


         <Route path='/updateVehicle/:id' element={<EditVehicleForm setEditing1={setEditing1}
           currentVehicle={currentVehicle}
           updateVehicle={updateVehicle}/> }></Route>

         <Route path="/addBooking" element={<AddBookingForm addBooking={addBooking}  />} />

         <Route path='viewAllBooking' element={<BookingList 
          bookingData={bookings} 
         editBooking={editBooking}
         cancelBooking={cancelBooking} />}>
        </Route>
        
         <Route path='/updateBooking/:id' element={<EditBookingForm setEditing3={setEditing3}
           currentBooking={currentBooking}
           updateBooking={updateBooking}/> }></Route>
         <Route exact path="addPayment" element={<AddPaymentForm addPayment={addPayment}/>} />
         
         <Route path='/viewAllPayments' element={<PaymentList 
    paymentData={payments}
   editPayment={editPayment}
         deletePayment={deletePayment} />}>
          

         </Route>
         <Route path="/updatePayment/:id" element={<EditPaymentForm setEditing4={setEditing4}
           currentPayment={currentPayment}
           updatePayment={updatePayment}/> }></Route>

         <Route exact path="addCustomerForm" element={<AddCustomerForm addCustomer={addCustomer}/>} />
         
         <Route path='/viewAllCustomers' element={<CustomerList 
    customerData={customers}
    editCustomer={editCustomer}
         deleteCustomer={deleteCustomer} />}>

         </Route>
         <Route path='/updateCustomer/:id' element={<EditCustomerForm setEditing5={setEditing5}
           currentCustomer={currentCustomer}
           updateCustomer={updateCustomer}/> }></Route>
        </Routes>
      </div>
    
    </BrowserRouter>
    )}</div></div>
    
    <div>
      <Footer/>
    </div>
    
    
    </div></div>
    </div>
)}

export default App;