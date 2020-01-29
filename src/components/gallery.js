import React from "react";
import {Container} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class extends React.Component{
    // TODO Use swiper
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: this.props.data[0].metadata.slidesPerView,
            slidesToScroll: 3
        };

        let slides = this.props.data[0].metadata.images.map(item => {
            return <img src={item} alt='' key={item}/>
        });

        return(
            <Container>
                <h1>{this.props.data[0].metadata.title}</h1>
                <Slider {...settings}>
                    {slides}
                </Slider>
            </Container>
        );
    }
}