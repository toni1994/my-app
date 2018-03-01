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
          <Line type='monotone' dataKey='number of people' stroke='#8884d8' fill='#8884d8' />
          <Line type='monotone' dataKey='iluminance' stroke='green' fill='#8884d8' />
         
        </LineChart>
        <LineChart width={530} height={180} data={props.data} syncId="anyId"
              margin={{top: 10, right: 25, left: 0, bottom: 0}}>
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="4 4"/>
          <Tooltip/>
          <Line type='monotone' dataKey='temperature' stroke='#8884d8' fill='#8884d8' />
          <Line type='monotone' dataKey='oxygen' stroke='green' fill='#8884d8' />
          <Legend verticalAlign="top" wrapperStyle={{lineHeight: '20px'}} />
        </LineChart>
      
        
        <LineChart width={530} height={220} data={props.data} syncId="anyId"
              margin={{top: 10, right: 25, left: 0, bottom: 0}}>
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          
          <Line type='monotone' dataKey='pressure' stroke='#82ca9d' fill='#82ca9d' />
          <Line type='monotone' dataKey='humidity' stroke='#82ca9d' fill='#82ca9d' />
          <Brush dataKey='time' />
          <Legend verticalAlign="top" wrapperStyle={{lineHeight: '20px'}} />
   
         
        </LineChart>
        </div>
    );

export default SynChart;