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
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip wrapperStyle={{backgroundColor: '#9F9F9F', color:'white'}}/>
        <Line type='monotone' dataKey='temperature' stroke="blue" dot={false} fill="blue" />
        <Line type='monotone' dataKey='humidity' stroke='white' dot={false}   fill='white' />   
        <Line type='monotone' dataKey='oxygen' stroke='#33ffff' dot={false} fill='#33ffff' />     
        </LineChart>
        <LineChart width={530} height={180} data={props.data} syncId="anyId"
              margin={{top: 10, right: 15, left: 5, bottom: 0}}>
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid  horizontal={false} vertical={false}/> 
        <CartesianGrid strokeDasharray="3 3"/>   
        <Line type='monotone' dataKey='numberOfPeople' stroke='white' dot={false} fill='white' />
        <Tooltip wrapperStyle={{backgroundColor: '#9F9F9F', color:'white'}}/>
        <Legend verticalAlign="top" iconType={"square"} iconSize={10} wrapperStyle={{lineHeight: '20px'}} />
        </LineChart>
        <LineChart width={530} height={220} data={props.data} syncId="anyId"
              margin={{top: 10, right: 15, left: 5, bottom: 0}}>
        <XAxis dataKey="time"/>
        <YAxis/>
        <CartesianGrid  horizontal={false} vertical={false}/> 
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip wrapperStyle={{backgroundColor: '#9F9F9F', color:'white'}}/>
        <Line type='monotone' dataKey='pressure' stroke='white' dot={false} fill='white' />
        <Line type='monotone' dataKey='iluminance' stroke="blue" dot={false} fill="blue" />
        <Brush dataKey='time' />
        <Legend verticalAlign="top" iconType={"square"} iconSize={10} wrapperStyle={{lineHeight: '20px'}} /> 
        </LineChart>
        </div> : <div style = {{width: '530px', height: '580px', backgroundColor: 'black'}}> </div> } </div>  
    );

export default SynChart;