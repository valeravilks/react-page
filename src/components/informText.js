import React from 'react';
import RichText from './richText';
import {Col, Container, Row} from "react-bootstrap";

export default class extends React.Component{
    render() {
        return(
            <Container>
                <Row>
                    {this.props.data[0].metadata.components.map(item =>
                        <Col className={item.col} key={item.metadata.title}>
                            <RichText data={item.metadata}/>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}