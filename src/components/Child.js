import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h3>This is a child: {this.props.name}</h3>
            </div>
        );
    }
}

export default Child;