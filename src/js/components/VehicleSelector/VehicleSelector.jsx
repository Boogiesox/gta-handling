import React from 'react';
import PropTypes from 'prop-types';

import constants from '../../constants';

const PROP_TYPES = {
    onChange: PropTypes.func.isRequired,
    selectedVehicle: PropTypes.string,
    vehicleOptions: PropTypes.arrayOf(PropTypes.object),
};

const DEFAULT_PROPS = {
    onChange: () => {},
}

const Option = ({ value, text }) => (
    <option value={value}>
        {text}
    </option>
);

const VehicleSelector = ({ onChange, selectedVehicle, model }) => {
    return (
        <div>
            <select
                onChange={(e) => { onChange(e.target.value) }}
            >
                {
                    model
                        .map((v) => {
                            return <Option
                                key={`vehicleSelectOption_${v.id}`}
                                selected={selectedVehicle === v.id}
                                value={v.id}
                                text={constants.vehicleNames[v.id] || v.id}
                            />
                        })
                }
            </select>
        </div>
    );
}

VehicleSelector.propTypes = PROP_TYPES;
VehicleSelector.defaultProps = DEFAULT_PROPS;

export default VehicleSelector;