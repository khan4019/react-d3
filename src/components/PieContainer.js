import React, { Component } from 'react';
import * as d3 from "d3";


import Slice from './Slice';

class PieContainer extends Component {
    constructor(props) {
        super(props);
        
        this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
        this.renderSlice = this.renderSlice.bind(this);
    }
    
    renderSlice(value, i) {
        let {innerRadius, outerRadius, cornerRadius, padAngle} = this.props;
        return (
          <Slice key={i}
                 innerRadius={innerRadius}
                 outerRadius={outerRadius}
                 cornerRadius={cornerRadius}
                 padAngle={padAngle}
                 value={value}
                 label={value.data}
                 fill={this.colorScale(i)} />
        );
    }


    translate(x, y) {
        return `translate(${x}, ${y})`;
      }
    
    render() {
        let {x, y, data} = this.props;
        let pie = d3.pie();
        return (
          <g transform={this.translate(x, y)}>
            {pie(data).map(this.renderSlice)}
          </g>
        );
    }
}

export default PieContainer;
