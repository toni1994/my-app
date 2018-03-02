import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip , Brush, Legend} from 'recharts'


const SynChart = (props) =>
	 (
        <div>      
        <LineChart width={530} height={180} data={props.data} syncId="anyId"
              margin={{top: 10, right: 25, left: 0, bottom: 0}}>
        <Legend verticalAlign="top" wrapperStyle={{lineHeight: '20px'}} />
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="4 4"/>
        <Tooltip/>
        <Line type='monotone' dataKey='numberOfPeople' stroke='black' fill='black' />
        <Line type='monotone' dataKey='humidity' stroke={props.humidityColor} fill={props.humidityColor} />
         
        </LineChart>
        <LineChart width={530} height={180} data={props.data} syncId="anyId"
              margin={{top: 10, right: 25, left: 0, bottom: 0}}>
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="4 4"/>
        <Tooltip/>
        <Line type='monotone' dataKey='temperature' stroke={props.temperatureColor} fill={props.temperatureColor} />
        <Line type='monotone' dataKey='oxygen' stroke='green' fill='#8884d8' />
        <Legend verticalAlign="top" wrapperStyle={{lineHeight: '20px'}} />
        </LineChart>
      
        
        <LineChart width={530} height={220} data={props.data} syncId="anyId"
              margin={{top: 10, right: 25, left: 0, bottom: 0}}>
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Line type='monotone' dataKey='pressure' stroke={props.pressureColor} fill={props.pressureColor} />
        <Line type='monotone' dataKey='iluminance' stroke={props.iluminanceColor} fill={props.iluminanceColor} />
        <Brush dataKey='time' />
        <Legend verticalAlign="top" wrapperStyle={{lineHeight: '20px'}} /> 
        </LineChart>
        </div>
    );

export default SynChart;