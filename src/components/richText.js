import React from 'react';
import styled from 'styled-components';

let H2 = styled.h2`
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #323232;
    margin-bottom: 12px;
`;

let Text = styled.div`
    font-size: 14px;
    line-height: 140%;
`;

let RT = styled.div`
  margin-bottom: 40px;
`;

export default class extends React.Component{
    render() {
        return(
            <RT>
                <H2>{this.props.data.title}</H2>
                <Text dangerouslySetInnerHTML={{__html: this.props.data.text}}>
                </Text>
            </RT>
        )
    }
}