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

    buildAndDownloadFile(model) {
        const csv = this.unparseAndProcess(model);
        const textFileAsBlob = new Blob([csv], {type:'text/plain'});
        const downloadLink = document.createElement("a");

        downloadLink.download = "handling.cfg";
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }

    unparseAndProcess(model) {
        const config = {
            delimiter: " ",
            newline: "\r\n",
            quoteChar: '"',
            header: false,
        };
        const unparsed = Papa.unparse(model, config);
        const processed = `${unparsed}${config.newline};${config.newline};the end`;

        return processed;
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

                <hr />

                <ParamsList
                    onChange={this.handleVehicleParamChange}
                    selectedVehicleModel={this.getSelectedVehicleModel(this.state.selectedVehicle)}
                />

                <hr />

                <button onClick={() => {this.buildAndDownloadFile(gameModel)}}>Download</button>
            </div>
        );
    }
}

export default App;