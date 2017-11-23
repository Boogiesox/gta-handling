import React from 'react';
import PropTypes from 'prop-types';

import constants from '../../constants';

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

const ParamField = ({ onChange, config, value }) => {
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
                <select onChange={onChange}>
                    {
                        config.options.map((o, i) => {
                            return (
                                <option
                                    key={`paramOption_${i}`}
                                    selected={o.value === value}
                                    value={o.value}>
                                    {o.name}
                                </option>
                            )
                        })
                    }
                </select>
            );
        }
    }

    return paramField;
};

const ParamsList = ({ onChange, selectedVehicleModel }) => {
    return (
        <div>
            {
                Object.keys(selectedVehicleModel)
                    .map((k) => (
                        <div key={`param_${k}`}>
                            <Label
                                config={constants.fieldConfig[k]}
                                name={constants.fieldConfig[k]
                                    ? constants.fieldConfig[k].name
                                    : k}
                            />
                            
                            <ParamField
                                config={constants.fieldConfig[k]}
                                value={selectedVehicleModel[k]}
                                onChange={(e) => onChange(k, e.target.value)}
                            />
                        </div>
                    ))
            }
        </div>
    );
}

export default ParamsList;