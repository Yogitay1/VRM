import { useEffect, useState } from "react"
import {Link} from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axiosInstance from "../http-common";
import OtherNavs from "../pages/OtherNavs";

function Admin (){

    const USER_REGEX=/^[A-z][A-z0-9-_]{3,10}$/
    const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@!%]).{8,10}$/
    const REGISTER_URL = '/addAdmin';

    const [username,setUsername]=useState('');
    const[validName,setValidName]=useState(false);

    const [password,setPassword] = useState('');
    const[validPassword,setValidPassword]=useState(false);

    const [matchPassword,setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);

    const [errMsg,setErrMsg]=useState('');
    const [success,setSuccess] = useState(false);

    useEffect(()=>{
        setValidName(USER_REGEX.test(username));

    },[username])

    useEffect(()=>{
        setValidPassword(PWD_REGEX.test(password));
        setValidMatch(password=== matchPassword)
    },[password,matchPassword]);

    useEffect(()=>{
        setErrMsg('');
    },[username,password,matchPassword])


    const handleSubmit =async (e)=>{
        e.preventDefault();
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
       
        if(!v1 || !v2){
          setErrMsg("Invalid Entry");
          return;
        }
      try{
        
      const response = await axiosInstance.post(REGISTER_URL,
        JSON.stringify({ username, password }),
        setSuccess(true),
        {
            headers: { 'Content-Type': 'application/json' }
    
        }
    );
    console.log(response?.data);
    const token  = response?.data.token;
            const roles=response?.data.roles;
            
            localStorage.setItem('adminDetails',JSON.stringify(response.data))
      }
      catch(err){
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 409) {
              setErrMsg('Username Taken');
          } else {
              setErrMsg('Registration Failed')
          }
        
      }

      }

      return(
        
        <div class="addDriver">
        <OtherNavs/>
            <><br/><br/><br/><br/>
            {success ? (
                <section>
    
                   <h1>Success!</h1>
                   <p>
                    <Link to = "/adminLogin">Login In</Link>
                   </p>
    
    
                </section>
            ):(
    
         <section>
             
             <h1>Register</h1>
             <form onSubmit={handleSubmit}>
               <label htmlFor="username">UserName
               <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validName || !username ? "hide" : "invalid"} />
               </label>
               <input 
               type='text'
               id='username'
               
               autoComplete='off'
               onChange={(e)=>setUsername(e.target.value)}
              
               value={username}
            
               />
               
               
               <label>Password
               <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
             <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
               </label>
               <input 
               type='password'
               id='password'
               onChange={(e)=>setPassword(e.target.value)}
              
               value={password}/>
    
  
    
                            <label>Confirm Password
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
                            </label>
                            <input
                            type='password'
                            id='confirmpwd'
                            value={matchPassword}
                            onChange={(e)=>setMatchPassword(e.target.value)}
                            
                            />
    
   
                            
                            <button >Register</button>
             
    
    
    
             </form>
                  <p>
                    Already registered?<br/>
                    <Link to ="/adminlogin">Login In</Link>
                  </p>
    
    
         </section>
    
            )}
            
            <br/><br/><br/><br/><br/>
            
            
            
            </>
    
    
    
    </div>
    
            )
      



}
export default Admin;