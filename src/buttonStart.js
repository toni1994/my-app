import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './index.scss';

export default class ButtonStart extends React.Component {
  render() {
    return (
      <div className={styles.buttons}>
        <div className={styles.buttonStart}> { this.props.start ? <RaisedButton label="STOP" onClick={()=>{this.props.changeToStop(false)}} /> : <RaisedButton label="START" onClick={()=>{this.props.changeToStart(true)}}/> } </div>
        <div className={styles.buttonReset}> <RaisedButton label="RESET" onClick={this.props.reset}/> </div>
      </div>
    );
  }
}