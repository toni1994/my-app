import React from 'react';
import DropDownMenu  from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class ButtonInterval extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <RaisedButton label="START"/>
        <RaisedButton label="RESET"/>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="30 seconds" />
          <MenuItem value={2} primaryText="1 minutes" />
          <MenuItem value={3} primaryText="2 minutes" />
          <MenuItem value={4} primaryText="5 minutes" />
          <MenuItem value={5} primaryText="10 minutes" />
        </DropDownMenu>
      </div>
    );
  }
}