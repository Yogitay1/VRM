import '../App.css';
import map from '../images/map.jpg'
import OtherNavs from './OtherNavs';
import Card from 'react-bootstrap/Card';
import CardContent from '@mui/material/CardContent';
import '../App.css';
import {retrieveVehicles,}from '../actions/vehicles'
import { Grid } from '@mui/material';
import car2 from '../images/car2.jpg';

export default function ContactUs(){
    return(
        <>
        <div class="contactUs">
            <OtherNavs/>
            
        <h1>Address:</h1>
      
        <p>OVRMS, Street No. 23</p>
<p>402, Bhageerath, Senapati Bapat Road, Near ICC Tech Park, Pune 411 016.</p>
        <p>Phone:+91 6362161697</p>
        <p>Phone:+91 9666130629</p>
        <p>Mail:ovrms@co.in</p>
        <br/>
        <img src={map} width="800px" height='400px' />
        <br/><br/><br/>
        
        </div>
        </>
    )
}