import { Link, useNavigate } from "react-router-dom";
import '../App.css'
import OtherNavs from "./OtherNavs";


const Thanks=()=>{

/* const nav = useNavigate();
    const logout=()=>{
        localStorage.removeItem('customerDetails');
        nav("/");
    } */

    
return(
    
    <div class="lastPage">
        <OtherNavs/>
        <br/><br/><br/><br/>
        <p>Hurrayyyy!!!!</p>
        <p>Your ride got Booked!! <br/> Will be delivered on time</p>
    <br/><br/><br/><br/><br/><br/><br/><br/>

    </div>

)



}

export default Thanks;