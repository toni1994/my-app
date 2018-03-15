import React from 'react';
import DropDownMenu  from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class ButtonInterval extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => {
   this.props.changeDataInterval(value)
   this.setState({value});}

  render() {
    return (
      <div>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
          labelStyle={{'color':'white'}}
          selectedMenuItemStyle= {{'color':'blue'}}
        >
          <MenuItem value={1} primaryText="30 seconds"/>
          <MenuItem value={2} primaryText="1 minutes"/>
          <MenuItem value={4} primaryText="2 minutes"/>
          <MenuItem value={10} primaryText="5 minutes"/>
          <MenuItem value={20} primaryText="10 minutes"/>
        </DropDownMenu>
      </div>
    );
  }
}