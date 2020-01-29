import React from "react";
import {Container, Row, Form, Col, Button} from "react-bootstrap";

export default class extends React.Component{
    render() {
        let mainGroupFilter = this.props.data.fields.filter(item => item.group === 'main');
        let mainGroupContent = mainGroupFilter.map(item =>
            <Col lg={6}>
                <Form.Group>
                    <Form.Label>{item.label} {item.required ? '' : '(не обязательно)'} </Form.Label>
                    <Form.Control
                        required={item.required}
                        type={item.type}
                        placeholder=""
                        name={item.name}
                    />
                </Form.Group>
            </Col>
        );

        let additionalGroupFilter = this.props.data.fields.filter(item => item.group === 'additional');
        let additionalGroupContent = additionalGroupFilter.map(item =>
            <Col key={item.name}>
                <Form.Group>
                    <Form.Label>{item.label} {item.required ? '' : '(не обязательно)'} </Form.Label>
                    <Form.Control
                        required={item.required}
                        type={item.type}
                        placeholder=""
                        name={item.name}
                    />
                </Form.Group>
            </Col>
        );

        let checkboxFilter = this.props.data.fields.filter(item => item.group === undefined);
        let checkboxContent = checkboxFilter.map(item =>
            <Col key={item.name}>
                <Form.Group>
                    <Form.Check type="checkbox" label={item.label} />
                </Form.Group>
            </Col>
        );

        return(
            <Container>
                <h2>{this.props.data.title}</h2>
                <Form>
                    <Row>
                        <Col className={this.props.data.field_groups.main}>
                            <Row>
                                {mainGroupContent}
                            </Row>
                        </Col>
                        <Col className={this.props.data.field_groups.additional}>
                            {additionalGroupContent}
                        </Col>
                    </Row>
                    {checkboxContent}
                    <Button variant="primary" type="submit">
                        {this.props.data.submit_button.text}
                    </Button>
                </Form>
            </Container>
        );
    }
}