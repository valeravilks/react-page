import React from 'react';
import RichText from './richText';
import {Col, Container, Row} from "react-bootstrap";

export default class extends React.Component{
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <RichText/>
                    </Col>
                    <Col>
                        <RichText/>
                    </Col>
                </Row>
            </Container>
        );
    }
}