import React, { Component } from 'react';
import {select} from 'd3-selection';
import {scaleLinear} from 'd3-scale';
import {max} from 'd3-array';

class BadBarChart extends Component {
    constructor(props){
        super(props)
        this.createBarChart = this.createBarChart.bind(this);
    }
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        this.createBarChart()
    }

    createBarChart() {
        const node = this.node
        const dataMax = max(this.props.data)
        const yScale = scaleLinear()
                        .domain([0, dataMax])
                        .range([0, this.props.height])
     
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')
     
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()
        
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * 25)
            .attr('y', d => this.props.height - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)
    }

    render() {
        return (
            <div>
                <h1>Bad Bar Chart</h1>
                <svg ref={node => this.node = node}
                    width={300} height={300}>
                </svg>
            </div>
        );
    }
}

export default BadBarChart;