import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import '../App.css';
import { retrievePayments,}from '../actions/payments'
import Table from 'react-bootstrap/Table';
import OtherNavs from '../pages/OtherNavs';
import AdminNav from '../pages/AdminNav';

export default function PaymentList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentPayment,setCurrentPayment]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const payments = useSelector((state)=>state.payments);
     

    useEffect(()=>{
        dispatch(retrievePayments());
      },[]);

    
    const refreshData=()=>{
        setCurrentPayment(null);
        setCurrentIndex(-1);
    }
 

    const setActivePayment = (payment,index)=>{
        setCurrentPayment(payment);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 



    
        return (
          <div class="vehicle">
            <AdminNav/>
            <br/>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>bookingId</th>
                <th>paymentId</th>
                <th>paymentDate</th>
                <th>paymentMode</th>
                <th>paymentStatus</th>
               <th></th>
               <th></th>
              </tr>
            </thead>
            <tbody>
            {payments?.length > 0 ? (
    payments.map((payment)=>(
    <tr key={payment.paymentId}>
        <td>{payment.booking?.bookingId}</td>
        <td>{payment.paymentId}</td>
        <td>{payment.paymentMode}</td>
        <td>{payment.paymentDate}</td>
        <td>{payment.paymentStatus}</td>
        
        <td><button 
         onClick={()=>{props.editPayment(payment)}}
        className="button muted-button">
          
          <Link to={"/updatePayment/:id"} className="nav-link">
              Edit
            </Link>
          
          </button></td>
        <td><button 
        onClick={()=>props.deletePayment(payment.paymentId)}
        className="button muted-button">Delete</button></td>
        
     </tr>))):(
        <tr>
            <td colSpan={4}>No Payment</td>
        </tr>
     )}

    </tbody>
</Table>
<br/><br/><br/>
</div>
        )
      }