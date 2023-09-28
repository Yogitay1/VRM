import { useNavigate } from "react-router-dom";
import '../App.css'


const LogOut1=()=>{
    const nav = useNavigate();
    
        localStorage.removeItem('adminDetails');
        nav("/");
    

}

export default LogOut1;