import React from 'react';
import PropTypes from 'prop-types';

import { fieldConfig } from '../../constants';
import FlagsEditor from './FlagsEditor';

const Label = ({ config, name }) => {
    let label = null;

    if(config && !config.hide) {
        return (
            <label>
                {name}
            </label>
        );
    }

    return label;
};

const ParamField = ({ onChange, config, value, selectedGame }) => {
    let paramField = null;
    
    if(config && !config.hide && config.type) {
        if(config.type === "number") {
            paramField = (
                <input
                    onChange={onChange}
                    type="number"
                    step={config.step}
                    value={value}
                />
            );
        } else if(config.type === "text") {
            paramField = (
                <input
                    onChange={onChange}
                    type="text"
                    value={value}
                    maxLength={config.maxLength}
                />
            );
        } else if(config.type === "select") {
            paramField = (
                <select
                    onChange={onChange}
                    value={value}
                >
                    {
                        config.options.map((o, i) => {
                            return (
                                <option
                                    key={`paramOption_${i}`}
                                    value={o.value}>
                                    {o.name}
                                </option>
                            )
                        })
                    }
                </select>
            );
        } else if(config.type === "flags") {
            paramField = (
                <FlagsEditor
                    onChange={onChange}
                    value={value}
                    selectedGame={selectedGame}
                />
            );
        }
    }

    return paramField;
};

const ParamsList = ({ onChange, selectedVehicleModel, selectedGame }) => {
    return (
        <div>
            {
                Object.keys(selectedVehicleModel)
                    .map((k) => (
                        <div key={`param_${k}`}>
                            <Label
                                config={fieldConfig[k]}
                                name={fieldConfig[k]
                                    ? fieldConfig[k].name
                                    : k}
                            />
                            
                            <ParamField
                                config={fieldConfig[k]}
                                value={selectedVehicleModel[k]}
                                onChange={(e) => onChange(k, e.target.value)}
                                selectedGame={selectedGame}
                            />
                        </div>
                    ))
            }
        </div>
    );
};

export default ParamsList;