import { useNavigate } from "react-router-dom";
import '../App.css'


const LogOut=()=>{
    const nav = useNavigate();
    
        localStorage.removeItem('customerDetails');
        nav("/");
    

}

export default LogOut;