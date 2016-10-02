import React from 'react';
import Gta3 from '../models/gta_iii.js';
import GtaVC from '../models/gta_vc.js';
import GtaSA from '../models/gta_sa.js';
import Gta4 from '../models/gta_iv.js';

const VehicleLoader = React.createClass ({
  getInitialState: function() {
    return {
      position: 0,
      vehicles: this.games['GTA3']
    }
  },

  games: {
    GTA3: Gta3,
    GTAVC: GtaVC,
    GTASA: GtaSA,
    GTA4: Gta4
  },

  next: function() {
    var pos = this.state.position;
    return this.setState({
      position: pos < this.state.vehicles.length - 1 ? pos + 1 : pos
    });
  },

  previous: function() {
    var pos = this.state.position;
    return this.setState({
      position: pos > 0 ? pos - 1 : 0
    })
  },

  changeGame: function(e) {
    return this.setState({
      position: 0,
      vehicles: this.games[e.target.value]
    });
  },

  render: function() {
    return (
      <div>
        <select onChange={this.changeGame}>
          {
            Object.keys(this.games).map(function (key) {
              return (
                <option value={key} key={key}>{key}</option>
              );
            }, this)
          }
        </select>

        <button onClick={this.previous}>Previous</button>

        <button onClick={this.next}>Next</button>
        
        {
          Object.keys(this.state.vehicles[this.state.position]).map(function (key) {
            return (
              <div key={key}>
                {key}: {this.state.vehicles[this.state.position][key]}
              </div>
            );
          }, this)
        }
      </div>
    );
  }
});

export default VehicleLoader;