import React from 'react';
import Gta3 from '../models/gta_iii.js';
import GtaVC from '../models/gta_vc.js';

const VehicleLoader = React.createClass ({
  getInitialState: function() {
    return {
      position: 0
    }
  },

  vehicles: GtaVC,

  next: function() {
    return this.setState({ 
      position: this.state.position+1
    });
  },

  previous: function() {
    return this.setState({
      position: this.state.position-1
    })
  },

  render: function() {
    return (
      <div>
        <button onClick={this.previous}>Previous</button>
        {this.vehicles[this.state.position].id}
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
});

export default VehicleLoader;