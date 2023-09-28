import {Link} from 'react-router-dom';
import BootstrapCarouselComponent from '../components/BootstrapCarouselComponent';
import MainPageNav from './MainPageNav';
import '../style/Home.css'
import logo from "../images/logo.jpg";
import '../App.css'
const Home = ()=>{

    return(
        <div class="bodyBackground">
            <br/>
            
        <MainPageNav />
        <br/>
        <br/>
        <section>
         <h1 class="mainHead">Your Rental Journey Starts Here!!!</h1>
         <BootstrapCarouselComponent /> 
         <br/><br/>
         <div className="d-grid gap-2">
         <button >
         <Link to ="register">Register</Link>
         </button>
         <br/>
         <button>
         
         <Link to ="login">Login</Link>
        </button>
        <br/><br/>
        </div>
        </section>
        </div>
    )
}

export default Home;