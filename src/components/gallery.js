import React from "react";
import {Container} from "react-bootstrap";
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import 'swiper/css/swiper.css';
import './gallery.css';

let Title = styled.div`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 25px;
`;

let ImgButton = styled.div`
  border-radius: 5px;
  background-image: url(${props => props.theme.backgroundImage});
  background-position: center center;
  background-size: cover;
  height: 243px;
`;

export default class extends React.Component{
    render() {
         let slides = this.props.data[0].metadata.images.map(item => {
            return (
                <ImgButton theme={{backgroundImage: item}} key={item}>
                </ImgButton>
            )
         });

        const params = {
            breakpoints: {
                992: {
                    slidesPerView: this.props.data[0].metadata.slidesPerView
                },
                768: {
                    slidesPerView: 2
                }
            },
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.dot-swiper',
                clickable: true,
                renderBullet: (index, className) => {
                    return '<div class="' + className + '"></div>';
                }
            },
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
                renderBullet: (index, className) => {
                    return '<div class="' + className + '"></div>';
                }
            }
        }

        return(
            <Container>
                <Title>{this.props.data[0].metadata.title}</Title>
                <Swiper {...params}>
                    {slides}
                </Swiper>
            </Container>
        );
    }
}