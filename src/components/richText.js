import React from 'react';

export default class extends React.Component{
    render() {

        let createMarkup = () => {
            return {__html: this.props.data.text};
        };

        return(
            <div>
                <h2>{this.props.data.title}</h2>
                <div dangerouslySetInnerHTML={createMarkup()}>
                </div>
            </div>
            )
    }
}