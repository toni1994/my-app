import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip , Brush, Legend} from 'recharts'


const SynChart = (props) =>
	 (
       
        <div> 
        { props.excistData ? <div>   
        <LineChart width={530} height={180} data={props.data} syncId="anyId"
              margin={{top: 10, right: 15, left: 5, bottom: 0}} color='black'>
        <Legend verticalAlign="top" iconType={"square"} iconSize={10} wrapperStyle={{lineHeight: '20px'}} />
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid  horizontal={false} vertical={false}/> 
        <CartesianGrid strokeDasharray="4 4"/>
        <Tooltip/>
        <Line type='monotone' dataKey='temperature' stroke={props.temperatureColor} fill={props.temperatureColor} />
        <Line type='monotone' dataKey='humidity' stroke={props.humidityColor} fill={props.humidityColor} />   
        <Line type='monotone' dataKey='oxygen' stroke='green' fill='#8884d8' />     
        </LineChart>
        <LineChart width={530} height={180} data={props.data} syncId="anyId"
              margin={{top: 10, right: 15, left: 5, bottom: 0}}>
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid  horizontal={false} vertical={false}/> 
        <CartesianGrid strokeDasharray="4 4"/>
        <Tooltip/>     
        <Line type='monotone' dataKey='numberOfPeople' stroke='black' fill='black' />
        <Legend verticalAlign="top" iconType={"square"} iconSize={10} wrapperStyle={{lineHeight: '20px'}} />
        </LineChart>
        <LineChart width={530} height={220} data={props.data} syncId="anyId"
              margin={{top: 10, right: 15, left: 5, bottom: 0}}>
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid  horizontal={false} vertical={false}/> 
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Line type='monotone' dataKey='pressure' stroke={props.pressureColor} fill={props.pressureColor} />
        <Line type='monotone' dataKey='iluminance' stroke={props.iluminanceColor} fill={props.iluminanceColor} />
        <Brush dataKey='time' />
        <Legend verticalAlign="top" iconType={"square"} iconSize={10} wrapperStyle={{lineHeight: '20px'}} /> 
        </LineChart>
        </div> : null } </div>  
    );

export default SynChart;