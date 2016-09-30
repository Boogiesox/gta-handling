import React from 'react';
import Gta3 from '../models/gta_iii.js';
import GtaVC from '../models/gta_vc.js';
import GtaSA from '../models/gta_sa.js';
import Gta4 from '../models/gta_iv.js';

const VehicleLoader = React.createClass ({
  getInitialState: function() {
    return {
      position: 0
    }
  },

  vehicles: Gta4,

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
        { Object.keys(this.vehicles[this.state.position]).map(function (key) {
          return (
            <div>
              {this.vehicles[this.state.position]}{key}: {key}
            </div>
            );
        }, this)}
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
});

export default VehicleLoader;