import React, { Component } from 'react';
import style from './styles/app.scss';
import SimpleLineChart from './chart.js';
import SynChart from './synChart.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getParameteres} from "./redux/actions/index.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonInterval from './buttonInterval';

const imgTemperature = require('./images/temperature.png');
const imgHumadity = require('./images/humadity.png');
const imgLightness = require('./images/lightness.png');
const imgPressure = require('./images/pressure.png');
const imgPeople = require('./images/people.png');

class App extends Component {
  constructor(props){
    super(props);
    this.myTimeoutFunction=this.myTimeoutFunction.bind(this);
  }

  myTimeoutFunction()
  {
      this.props.actions.getParameteres();
      setTimeout(this.myTimeoutFunction, 20000);
  }

  componentWillMount(){
    this.props.actions.getParameteres();
    this.myTimeoutFunction();}
  render() {
    return (
      <MuiThemeProvider>
      <div className={style.wrapper}>
        <div className={style.blockContainer}> 

          <div className={style.blockItem}>
            <div className={style.ImgagePartOfBlock}> <img className={style.imgTemperature} src={imgTemperature} alt="imgTemperature"/> </div>
            <div className={style.LeftDescriptionPartOfBlock}> <div className={style.nameOfParametar}>  [TEMPERATURA] °C <br/> UGODNA SOBNA TEMPERATURA </div> </div>  
           </div>

          <div className={style.blockItem}>
            <div className={style.RightDescriptionPartOfBlock}> <div className={style.nameOfParametar}>  [HUMIDITY] % <br/>  H ZRAK  </div> </div>  
            <div className={style.ImgagePartOfBlock}>  <img className={style.imgHumadity} src={imgHumadity} alt="imgHumadity"/> </div>
          </div>

          <div className={style.blockItem}>
            <div className={style.ImgagePartOfBlock}>  <img className={style.imgLightness} src={imgLightness} alt="imgLightness"/> </div>
            <div className={style.LeftDescriptionPartOfBlock}> <div className={style.nameOfParametar}> [OSVJETLJENJE U PROSTORIJI] Lux <br/> JAKO OSVJETLJENJE  </div> </div>  
          </div>

          <div className={style.blockItem}>
            <div className={style.RightDescriptionPartOfBlock}> <div className={style.nameOfParametar}>  [TLAK] Pa <br/>  VISOKI TLAK  </div>  </div>  
            <div className={style.ImgagePartOfBlock}>  <img className={style.imgPressure} src={imgPressure} alt="imgPressure"/> </div>
          </div>

          <div className={style.middleBlock}>  <div className={style.middleBlockInside}> <img className={style.imgPeople} src={imgPeople} alt="imgPeople"/> <p className={style.conferenceRoom}>  People currently <br/> in the <br/> conference room <br/> <br/>  <b> XYZ </b> </p>  </div> </div>
          </div>
        <div className={style.chartContainer}>
            <ButtonInterval/>
            <div className={style.roomTemperature}>
              <div className={style.chartDescription}>
              Room temperature throught the  <br/> day depending on number of <br/> people present
              </div>
              <div className={style.chart}>
             <SimpleLineChart data={this.props.data}/>
             </div>
              </div>
            <div className={style.roomPressure}>
            <div className={style.chartDescription}>
          Room pressure and humidity  <br/> through the day depending on  <br/> number of people present
          <div className={style.chart}>
          <SynChart data={this.props.data}/>
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getParameteres,
    }, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
