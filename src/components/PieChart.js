import React, { Component } from 'react';
import * as d3 from "d3";


import Slice from './Slice';

class PieChart extends Component {
    constructor(props) {
        super(props);
        const width = this.props.width || 300;
        const height = this.props.height || 300;
        const minViewportSize = Math.min(width, height);
        
        this.outerRadius = (minViewportSize * .9) / 2;
        this.innerRadius = this.outerRadius * 0.35;
        this.x = width / 2;
        this.y = height / 2;
        this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
        this.renderSlice = this.renderSlice.bind(this);
    }
    
    renderSlice(value, i) {
        return (
            <Slice key={i}
                innerRadius={this.innerRadius}
                outerRadius={this.outerRadius}
                cornerRadius={7}
                padAngle={.02}
                value={value}
                label={value.data}
                fill={this.colorScale(i)} />
        );
    }


    translate(x, y) {
        return `translate(${x}, ${y})`;
      }
    
    render() {
        let {data} = this.props;
        let pie = d3.pie();
        return (
            <svg width={this.props.width} height={this.props.height}>
                <g transform={this.translate(this.x, this.y)}>
                    {pie(data).map(this.renderSlice)}
                </g>
            </svg>
        );
    }
}

export default PieChart;
