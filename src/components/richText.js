import React from 'react';

export default class extends React.Component{
    render() {
        return(
            <div>
                <h2>{this.props.data.title}</h2>
                <div dangerouslySetInnerHTML={{__html: this.props.data.text}}>
                </div>
            </div>
        )
    }
}