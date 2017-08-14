import React, { Component } from 'react';

import PieContainer from './PieContainer';

class Pie extends Component {
    render() {
        let width = this.props.width || 300;
        let height = this.props.height || 300;
        let minViewportSize = Math.min(width, height);
        let radius = (minViewportSize * .9) / 2;
        let x = width / 2;
        let y = height / 2;
    
        return (
          <svg width={width} height={height}>
            <PieContainer 
                 x={x}
                 y={y}
                 innerRadius={radius * .35}
                 outerRadius={radius}
                 cornerRadius={7}
                 padAngle={.02}
                 data={this.props.data} />
          </svg>
        );
    }
}

export default Pie;
