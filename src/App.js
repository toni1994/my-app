import React, { Component } from 'react';
import style from './index.scss';
import SynChart from './synChart.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getParameteres, changeDataInterval, reset, start_stop} from "./redux/actions/index.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonInterval from './buttonInterval';
import ButtonStart from './buttonStart';

import AnyChart from 'anychart-react'

const imgTemperature = require('./images/temperature.png');
const imgHumadity = require('./images/humadity.png');
const imgLightness = require('./images/lightness.png');
const imgPressure = require('./images/pressure.png');
const imgPeople = require('./images/people.png');

var globalTimer = {};

class App extends Component {
  constructor(props){
    super(props);
    this.myTimeoutFunction=this.myTimeoutFunction.bind(this);
    this.changeInterval=this.changeInterval.bind(this);
    this.resetAll=this.resetAll.bind(this);
    this.changeToStart=this.changeToStart.bind(this);
    this.changeToStop=this.changeToStop.bind(this);
    this.getColor=this.getColor.bind(this);
    this.getCondition=this.getCondition.bind(this);
  }

  changeInterval(newInterval){
      this.props.actions.changeDataInterval(newInterval);
  }

  resetAll(){
    this.props.actions.reset();
    complexSettings.title = "Oxygen level in the air"
    clearInterval(globalTimer);
}

  changeToStart(value){
    this.props.actions.start_stop(value);
    this.myTimeoutFunction();
}

  changeToStop(value){
  this.props.actions.start_stop(value);
  clearInterval(globalTimer);
}

  myTimeoutFunction()
  {
      this.props.actions.getParameteres();
      globalTimer = setTimeout(this.myTimeoutFunction, this.props.dataInterval * 30000);
  }
  
  getColor(type,value){
  if(value !== undefined)
  {
      switch(type){
        case "temperature":{
          if(value < 15)
            return 'blue'
          else if(value >= 15 && value < 18)
            return '#8080ff'
          else if(value >= 18 && value < 22 )
            return '#C4D9AB'
          else if(value >= 22 && value < 25)
            return 'orange'
          else
            return 'red'
        }
        case "humidity":{
          if(value < 20)
          return '#994d00'
        else if(value >= 20 && value < 40)
          return '#C9DA71'
        else
          return '#4d4dff'

        }
        case "pressure":{
          if(value < 100)
          return '#b8b894'
        else if(value >= 100 && value < 101.4)
          return '#C4D9AB'
        else
          return '#D97D00' 

        }
        case "iluminance":{
          if(value < 20)
          return '#1a1a00'
        else if(value >= 20 && value < 60)
          return  '#ffff4d'
        else if(value >= 60 && value < 90 )
          return '#E6CE2C'
        else
          return '#D97D00' 

        }
        case "oxygen":{
          if(value < 15)
          return '#b3b3ff'
        else if(value >= 15 && value < 19.5)
          return '#8080ff'
        else if(value >= 19.5 && value < 23.5 )
          return '#3333ff'
        else
          return '#00134d'

        }
        default:
          return null;
      }}
  }

  getCondition(type,value){
    if(value !== undefined)
    {
      switch(type){
        case "temperature":{
          if(value < 15)
            return 'VERY COLD'
          else if(value >= 15 && value < 18)
            return 'COLD'
          else if(value >= 18 && value < 22 )
            return 'IDEAL'
          else if(value >= 22 && value < 25)
            return 'WARM'
          else
            return 'HOT'
        }
        case "humidity":{
          if(value < 25)
          return 'DRY'
        else if(value >= 25 && value < 60)
          return 'IDEAL'
        else
          return 'HUMID'

        }
        case "pressure":{
          if(value < 1000)
          return 'LOW'
        else if(value >= 1000 && value < 1014)
          return 'MID'
        else
          return 'HIGH' 

        }
        case "iluminance":{
          if(value < 500)
          return 'LOW LIGHT LEVEL'
        else if(value >= 500 && value < 800)
          return  'NORMAL LIGHT LEVEL'
        else if(value >= 800 && value < 1000 )
          return 'BRIGHT LIGHT LEVEL'
        else
          return 'VERY BRIGHT LIGHT LEVEL' 

        }
        case "oxygen":{
          if(value < 10)
          return 'Criticaly low oxygen level'
        else if(value >= 10 && value < 12)
          return 'Alarming low oxygen level'
        else if(value >= 12 && value < 15)
          return 'Very low oxygen level'
        else if(value >= 15 && value < 19)
          return 'Low oxygen level'
        else if(value >= 19 && value < 21 )
          return 'Slightly lower oxygen level'
        else
          return 'Normal oxygen level'

        }
        default:
          return null;
 }}
    }

  componentWillMount(){
    //this.props.actions.getParameteres();
    //this.myTimeoutFunction();
  }
  render() {
    if(this.props.latestMeasurement.oxygen !== undefined){
      complexSettings.data = "Oxygen," + this.props.latestMeasurement.oxygen
      complexSettings.title = this.getCondition("oxygen",this.props.latestMeasurement.oxygen)
    }   
    else
      complexSettings.data = [5]
    return (
      <MuiThemeProvider>
      <div className={style.wrapper}>
        <div className={style.leftContainer}>
        <div className={style.blockContainer}> 
          <div className={style.blockItem} >
            <div className={style.ImgagePartOfBlock}> <img className={style.imgTemperature} src={imgTemperature} alt="imgTemperature"/> </div>
            <div className={style.LeftDescriptionPartOfBlock}> <div className={style.nameOfParametar}>  [TEMPERATURE] {this.props.latestMeasurement.temperature} °C <br/>  {this.getCondition("temperature",this.props.latestMeasurement.temperature)}</div> </div>  
           </div>
          
          <div className={style.blockItem} >
            <div className={style.RightDescriptionPartOfBlock}> <div className={style.nameOfParametar}>  [HUMIDITY] <br/> {this.props.latestMeasurement.humidity}  % <br/>  {this.getCondition("humidity",this.props.latestMeasurement.humidity)}  </div> </div>  
            <div className={style.ImgagePartOfBlock}>  <img className={style.imgHumadity} src={imgHumadity} alt="imgHumadity"/> </div>
          </div>

          <div className={style.blockItem} >
            <div className={style.ImgagePartOfBlock}>  <img className={style.imgLightness} src={imgLightness} alt="imgLightness"/> </div>
            <div className={style.LeftDescriptionPartOfBlock}> <div className={style.nameOfParametar}> [ILLUMINATION] <br/> {this.props.latestMeasurement.iluminance} Lux  <br/> {this.getCondition("iluminance",this.props.latestMeasurement.iluminance)}  </div> </div>  
          </div>

          <div className={style.blockItem} >
            <div className={style.RightDescriptionPartOfBlock}> <div className={style.nameOfParametar}>  [PRESSURE] <br/> {this.props.latestMeasurement.pressure} HPa <br/>  {this.getCondition("pressure",this.props.latestMeasurement.pressure)}  </div>  </div>  
            <div className={style.ImgagePartOfBlock}>  <img className={style.imgPressure} src={imgPressure} alt="imgPressure"/> </div>
          </div>

          <div className={style.middleBlock}>  <div className={style.middleBlockInside}> <img className={style.imgPeople} src={imgPeople} alt="imgPeople"/> <p className={style.conferenceRoom}>  People currently <br/> in the room </p> <p  className={style.numberOfPeopleDisplayed}> <b> {this.props.latestMeasurement.numberOfPeople} </b> </p>  </div> </div>
          </div> </div>
          <div className={style.middleContainer}> <AnyChart {...complexSettings}/> </div>
          <div className={style.rightContainer}>
          <div className={style.chartContainer}>
            <div className={style.settingsContainer}>   <ButtonStart reset={this.resetAll} start={this.props.start} changeToStart={this.changeToStart} changeToStop={this.changeToStop} /> <ButtonInterval changeDataInterval={this.changeInterval}/>  </div>
            <div className={style.roomPressure}>
          <div className={style.chart}> 
          <SynChart data={this.props.data} excistData={this.props.data.length > 0 ? true : false} temperatureColor={this.getColor("temperature",this.props.latestMeasurement.temperature)}
          humidityColor={this.getColor("humidity",this.props.latestMeasurement.humidity)} iluminanceColor={this.getColor("iluminance",this.props.latestMeasurement.iluminance)}
          pressureColor= {this.getColor("pressure",this.props.latestMeasurement.pressure)} />
          </div>
            </div>           
          </div>
          </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state){
  return {
      data: state.parameters.data,
      dataInterval: state.parameters.dataInterval,
      start: state.parameters.start,
      latestMeasurement: state.parameters.latestMeasurement,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getParameteres,
      changeDataInterval,
      reset,
      start_stop
    }, dispatch),
  };
}



const complexSettings = {
    width: 118,
    height: 640,
    background: 'black',
    type: 'column',
    data: [5] , 
    title: 'Oxygen level in the air',
    yScale: {
       minimum : 5,
       maximum: 30,
    ticks:{
      interval: 3
    }},
    yAxis: [1, {
      orientation: 'right',
      enabled: true,
      labels: {
        format: '{%Value}{decimalPoint:\\,}',
        fontColor: 'gray',
      }
    }],
    lineMarker: {
      value: 19,
      colors: 'blue'
    }
  };
  


export default connect(mapStateToProps, mapDispatchToProps)(App);
