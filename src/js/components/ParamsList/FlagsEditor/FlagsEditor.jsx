import React from 'react';
import PropTypes from 'prop-types';

import { flagsConfig } from '../../../constants';

const PROP_TYPES = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    selectedGame: PropTypes.string.isRequired,
};

const DEFAULT_PROPS = {
    onChange: () => {},
};

const updateActions = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
}

// Reduce 16-bit hex byte values above to array of flags
// e.g. what numbers using 1, 2, 4, and 8 add up to the
// supplied hexValue's decimal value.
// e.g.e.g. 'B' hex == 11 dec. so using the options from
// highest possible (maximum) would give flags [8, 2, 1] 
// Heirarchy goes value > byte > flags
const getSelectedFlags = (hexValue=0, maximum) => {
    let  selectedFlags = [];
    let  decimal = parseInt(hexValue, 16); //convert from hex value to decimal

    // This just works the byte from the highest possible flag
    // (8) and working backward to find out what sequence adds
    // up to the decimal value using 1, 2, 4, and 8.
    for (let index = maximum; index !== 0; index = index/2) {
        if(decimal >= index) {
            selectedFlags.push(index);
            decimal = decimal - index;
        }
    };

    return selectedFlags
};

const getUpdatedByteHex = (value, update) => {
    // The field value index's decimal value
    const decimal = parseInt(value[update.index] || 0, 16);

    // 'Right-pad' with 0s if the index doesn't already exist in the field
    // e.g. adding a "B" flag at index 3 for flags "C0" will become "COOB"
    if(!value[update.index]) {
        for (let i = -1; i <= update.index - value.length; i++) {
            value += "0";
        }
    }

    switch (update.action) {
        case updateActions.ADD: // Add update value to existing value and convert to hex
            return value.replaceAt(update.index, (decimal + update.value)
                .toString(16)
                .toUpperCase());
            break;
        
        case updateActions.REMOVE: // Subtract update value from existing value and convert to hex
            return value.replaceAt(update.index, (decimal - update.value)
                .toString(16)
                .toUpperCase());
            break;
    
        default: // error
            return console.error(`${update.action} is not a valid action for a flags value update`);
            break;
    }
}

const FlagInput = ({ onChange, label, desc, isSelected, index, value }) => {
    return (
        <div>
            <input
                type="checkbox"
                onChange={e => {
                    onChange({
                        action: isSelected ?
                            updateActions.REMOVE :
                            updateActions.ADD,
                        index,
                        value,
                    });
                }}
                checked={isSelected}
            />

            &nbsp;

            <label alt={desc} title={desc}>
                {label}
            </label>
        </div>
    );
};

const FlagsEditor = ({ onChange, value, selectedGame }) => {
    const bytesConfig = flagsConfig[selectedGame];

    return (
        <div>
            {
                bytesConfig.map((byteConfig, i) => {
                    const maximumByteValue = byteConfig.values[byteConfig.values.length - 1].value, // get highest possible flag for this byte
                        selectedFlags = getSelectedFlags(value[i], maximumByteValue);

                    return (
                        <fieldset>
                            {
                                byteConfig.values.map(flagConfig => (
                                    <FlagInput
                                        onChange={update => {
                                            const e = {
                                                target: {
                                                    value: getUpdatedByteHex(value, update),
                                                }
                                            }
                                            onChange(e);
                                        }}
                                        label={flagConfig.name || flagConfig.id}
                                        isSelected={selectedFlags.includes(flagConfig.value)}
                                        index={i}
                                        value={flagConfig.value}
                                        desc={flagConfig.description}
                                    />
                                ))
                            }
                        </fieldset>
                    );
                })
            }

            <style jsx>{`
                fieldset {
                    display: inline-block;
                }
            `}</style>
        </div>
    );
};

FlagsEditor.propTypes = PROP_TYPES;
FlagsEditor.defaultProps = DEFAULT_PROPS;

export default FlagsEditor;