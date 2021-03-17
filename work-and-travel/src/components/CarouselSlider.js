import {Component} from "react";
import {Carousel} from "react-bootstrap";

class CarouselSlider extends Component{

    render() {
        const handleSelect = (selectedIndex, e) => {

            //setIndex(selectedIndex);
        };
        return (
            <div className="w-100">
                <Carousel onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="//placeimg.com/250/250/arch"
                            alt="First slide"
                            style={{height:"100vh"}}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="//placeimg.com/250/250/arch"
                            alt="Second slide"
                            style={{height:"100vh"}}
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="//placeimg.com/250/250/arch"
                            alt="Third slide"
                            style={{height:"100vh"}}
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default CarouselSlider;