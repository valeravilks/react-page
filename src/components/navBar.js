import React from 'react';
import {Navbar, Container} from "react-bootstrap";

export default class extends React.Component{
    render() {
        return(
            <Navbar className='mb-5' expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand>Тестовое задание</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}