import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush} from 'recharts'


const SynChart = (props) =>
	 (
        <div>
        <LineChart width={600} height={200} data={props.data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="4 4"/>
          <Tooltip/>
          <Line type='monotone' dataKey='temp' stroke='#8884d8' fill='#8884d8' />
        </LineChart>
        <p>Maybe some other content</p>
        <LineChart width={600} height={200} data={props.data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line type='monotone' dataKey='hour' stroke='#82ca9d' fill='#82ca9d' />
          <Brush dataKey='name' />
        </LineChart>
        </div>
    );

export default SynChart;