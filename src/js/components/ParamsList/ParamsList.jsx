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

const Param = ({ onChange, config, value }) => {
    let param = null;
    
    if(config && !config.hide && config.type) {
        if(config.type === "number") {
            param = (
                <input
                    onChange={onChange}
                    type="number"
                    step={config.step}
                    value={value}
                />
            );
        } else if(config.type === "select") {
            param = (
                <select onChange={onChange}>
                    {
                        config.options.map((o) => {
                            return (
                                <option value={o.value}>
                                    {o.name}
                                </option>
                            )
                        })
                    }
                </select>
            );
        }
    }

    return param;
};

const ParamsList = ({ onChange, selectedVehicleModel }) => {
    return (
        <div>
            {
                Object.keys(selectedVehicleModel)
                    .map((k) => (
                        <div>
                            <Label
                                key={`paramLabel_${k}`}
                                config={constants.fieldConfig[k]}
                                name={constants.fieldConfig[k]
                                    ? constants.fieldConfig[k].name
                                    : k}
                            />
                            
                            <Param
                                key={`paramInput_${k}`}
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