import React from 'react';

const VehicleLoader = React.createClass ({
  getInitialState: function() {
    return {
      position: 0,
      vehicles: [
        { 
          "id": "KURUMA",
          "name": "Kuruma"
        },
        { 
          "id": "IDAHO",
          "name": "Idaho"
        }
      ]
    }
  },

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
        {this.state.vehicles[this.state.position].name}
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
});



export default VehicleLoader;