import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'


const SimpleLineChart = (props) =>
	 (
    	<LineChart width={600} height={150} data={props.data}
            margin={{top: 5, right: 30, left: 0, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="hour" stroke="#82ca9d" />
       <Line type="monotone" dataKey="num" stroke="#E6CE2C" />
      </LineChart>
    );

export default SimpleLineChart;