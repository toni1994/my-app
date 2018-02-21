import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const data = [
      {name: 'Measure 1', hour: 11, temp: 21, num: 12},
      {name: 'Measure 2', hour: 12, temp: 23, num: 17},
      {name: 'Measure 3 ', hour: 15, temp: 17, num: 2},
      {name: 'Measure 4', hour: 17, temp: 16, num: 2},
      {name: 'Measure 5', hour: 18, temp: 16, num: 1},
      {name: 'Measure 6', hour: 19, temp: 20, num: 11},
      {name: 'Measure 7', hour: 21, temp: 21, num: 14},
];

const SimpleLineChart = () =>
	 (
    	<LineChart width={400} height={200} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="hour" stroke="#82ca9d" />
       <Line type="monotone" dataKey="num" stroke="#E6CE2C" />
      </LineChart>
    );

export default SimpleLineChart;