import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/Bootstrap.css";
import car from '../images/car.jpg';
import car2 from '../images/car2.jpg';
import cardCar from '../images/cardCar.jpg';
import carShow from '../images/carShow.jpg';
import bicycles from '../images/bicycles.jpg';
import MotorBikes from '../images/MotorBikes.jpg';
import Bikes from '../images/Bikes.jpg';

class BootstrapCarouselComponent extends React.Component {
render() {
return (
<div>
<div className='container-fluid' >
<div className="row">
<div className="col-sm-12">
<h3 class="heading">Happy Renting</h3>
</div>
</div>
<div className="row">
<div className="col-12">
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src={cardCar} width="1200px" height='600px'
alt="First slide"
/>
<Carousel.Caption>


</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={carShow} width="1200px" height='600px'
alt="Second slide"
/>
<Carousel.Caption>


</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={MotorBikes} width="1200px" height='600px'
alt="Third slide"
/>
<Carousel.Caption>


</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img
className="d-block w-100"
src={Bikes} width="1200px" height='600px'
alt="Third slide"
/>
<Carousel.Caption>


</Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
<img
className="d-block w-100"
src={bicycles} width="1200px" height='600px'
alt="Third slide"
/>
<Carousel.Caption>


</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
)
};
}
export default BootstrapCarouselComponent;