import React from 'react';
import {Container} from "react-bootstrap";
import styled from 'styled-components';

let AppBar = styled.div`
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.25);
`;

let MainText = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
`;

let CustomContainer = styled(Container)`
    display: flex;
    align-items: center;
    min-height: 70px;
    margin-bottom: 40px;
`;

export default class extends React.Component{
    render() {
        return(
            <AppBar>
                <CustomContainer>
                    <MainText>Тестовое задание</MainText>
                </CustomContainer>
            </AppBar>
        )
    }
}