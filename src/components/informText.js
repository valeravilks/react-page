import React from 'react';
import RichText from './richText';
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

let Contain = styled(Container)`
  margin-top: 20px;
`;

export default class extends React.Component{
    render() {
        return(
            <Contain>
                <Row>
                    {this.props.data[0].metadata.components.map(item =>
                        <Col className={item.col} key={item.metadata.title}>
                            <RichText data={item.metadata}/>
                        </Col>
                    )}
                </Row>
            </Contain>
        );
    }
}