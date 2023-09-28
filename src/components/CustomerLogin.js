import {useRef,useState,useEffect} from 'react'

import {Link, useNavigate} from 'react-router-dom';
import apiClient from '../api/http-common';

const CustomerLogin = ()=>{

    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errMsg,setErrMsg] = useState();

    const [success, setSuccess] = useState(false);

    useEffect(()=>{userRef.current.focus()
    },[])

    useEffect(()=>{
        setErrMsg('');
    },[username,password])

    const submitHandler = async (e)=>{
        e.preventDefault();
        const response = await apiClient.post(`/validateUser`,{username,password})
        setSuccess(true);
        console.log(response);
        navigate('/customerRoute');
        
    }

    return (

        <>
          {success ? (
           <section>

           successful!!!!
           <Link to ="/customerRoute"></Link>

           </section>

          ):(

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
             aria-live="assertive">{errMsg}</p>
             <h1>Sign In</h1>
             <form onSubmit={submitHandler}>

            <label htmlFor='username'>Username</label>
            <input type='text' 
            id='username'
            ref={userRef}
            autoComplete="off"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
            required
    />
       <label htmlFor='password'>Password</label>
            <input
             type='password' 
            id='password'
            autoComplete="off"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            required
    />

   <button>Login </button>
             </form>
             <p> Need an account<br/>
            
        
                <Link to="/AddCustomerForm">Register</Link>
                </p>
        </section>
          )
}
        </>
     )

}

export default CustomerLogin;