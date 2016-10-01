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
    var pos = this.state.position;
    return this.setState({
      position: pos < this.vehicles.length - 1 ? pos + 1 : pos
    });
  },

  previous: function() {
    var pos = this.state.position;
    return this.setState({
      position: pos > 0 ? pos - 1 : 0
    })
  },

  render: function() {
    return (
      <div>
        <button onClick={this.previous}>Previous</button>
        { Object.keys(this.vehicles[this.state.position]).map(function (key) {
          return (
            <div>
              {key}: {this.vehicles[this.state.position][key]}
            </div>
            );
        }, this)}
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
});

export default VehicleLoader;