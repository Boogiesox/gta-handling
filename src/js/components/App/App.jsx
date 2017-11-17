import React from 'react';
import PropTypes from 'prop-types';
import findIndex from 'lodash.findindex';
import cloneDeep from 'lodash.clonedeep';
import Papa from 'papaparse';

import models from '../../models';
import GameSelector from '../GameSelector';
import VehicleSelector from '../VehicleSelector';
import ParamsList from '../ParamsList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleGameSelectionChange = this.gameSelectionChange.bind(this);
        this.handleVehicleSelectionChange = this.vehicleSelectionChange.bind(this);
        this.handleVehicleParamChange = this.vehicleParamChange.bind(this);

        this.state = {};
        this.state.selectedGame = 'gta_iii';
        this.state.gameModel = models[this.state.selectedGame];
        this.state.selectedVehicle = this.state.gameModel[0].id;
    }

    getSelectedVehicleModel(vehicleId) {
        return this.state.gameModel
            .find((v) => {
                return v.id === vehicleId;
            });
    }

    gameSelectionChange(gameOption) {
        this.setState(() => ({
            selectedGame: gameOption,
            gameModel: models[gameOption],
            selectedVehicle: models[gameOption][0].id,
        }));
    }

    vehicleSelectionChange(vehicleOption) {
        this.setState(() => ({
            selectedVehicle: vehicleOption,
        }));
    }

    vehicleParamChange(key, value) {
        const updatedGameModel = cloneDeep(this.state.gameModel);
        const index = findIndex(updatedGameModel, {id: this.state.selectedVehicle});

        updatedGameModel[index] = {
            ...updatedGameModel[index],
            [key]: value,
        }

        this.setState(() => ({
            gameModel: updatedGameModel,
        }));
    }

    parse(model) {
        const config = {
            delimiter: " ",
            newline: "",	// auto-detect
            quoteChar: '"',
            header: false,
        };

        console.log(Papa.unparse(model, config));
    }

    render() {
        const {
            selectedGame,
            gameModel,
            selectedVehicle,
        } = this.state;

        return (
            <div>
                <GameSelector
                    onChange={this.handleGameSelectionChange}
                    selectedGame={selectedGame} 
                />

                <VehicleSelector
                    onChange={this.handleVehicleSelectionChange}
                    selectedVehicle={selectedVehicle}
                    model={this.state.gameModel}
                />

                <ParamsList
                    onChange={this.handleVehicleParamChange}
                    selectedVehicleModel={this.getSelectedVehicleModel(this.state.selectedVehicle)}
                />

                <button onClick={() => {this.parse(gameModel)}}>Parse</button>
            </div>
        );
    }
}

export default App;