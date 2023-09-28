import '../App.css';
import OtherNavs from './OtherNavs';
import car6 from '../images/car6.jpg'
const AboutUs=()=>{


    return(
        
        <div class="aboutUs">
            <OtherNavs/>
            <br/><br/>

            <h1 class="head"><u>Welcome to Online Vehicle Rental</u> </h1><br/><br/>
            <p>

  Online Vehicle Rentals is a constantly growing vehicle rental brand, which has as priority to provide quality services at affordable rates and flexible terms and conditions, combined with real 24 hours support.</p>
<img src={car6} width="800px" height='600px'/>
<p> This has established us as one of the most competitive companies in the market. We are very clear on the terms and conditions of our rentals, with no hidden costs and many offers for our loyal customers and cooperators.
  Our fleet is consisted of a variety of vehicle groups, serving all requirements and needs. Our personnel are very well trained, always willing to go the extra mile in order to help our customers to feel like home! We pay great attention to our after sales service, by investing on our customer care department and the so called “repeaters”. Our vision is to become one of the world leaders in the rent a car industry and we are fighting towards this mission with honesty, consciousness, professionalism and very hard work.
 <br/>— OVRMS
<br/><br/><br/><br/><br/>
</p>
        </div>
    )


}
export default AboutUs;