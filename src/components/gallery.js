import React from "react";
import {Container} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class extends React.Component{
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        return(
            <Container>
                <h1>Галерея</h1>
                <Slider {...settings}>
                    <div >
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div >
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>1</h3>
                    </div>
                </Slider>
            </Container>
        );
    }
}