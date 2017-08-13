import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalBarSeries,
    LineSeries
} from 'react-vis';

class SleepingFamily extends Component {
    constructor(){
        super();
        this.data = {
            partner1 : [
                {x: 1, y: 7},
                {x: 2, y: 8},
                {x: 3, y: 12}
            ],
            partner2 : [
                {x: 1, y: 5},
                {x: 2, y: 6},
                {x: 3, y: 10}
            ],
            avg: [
                {x:1, y:6},
                {x:2, y: 7},
                {x:3, y:11}
            ]
        }
    }

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <h1>This is Sleeping family</h1>
                <h2>uses react-vis</h2>
                <XYPlot height={300} width={300}>
                    <XAxis/>
                    <YAxis/>
                    <HorizontalGridLines/>
                    <VerticalBarSeries data={this.data.partner1}/>
                    <VerticalBarSeries data={this.data.partner2}/>
                    <LineSeries data={this.data.avg}/>
                </XYPlot>
            </div>
        );
    }
}

export default SleepingFamily;