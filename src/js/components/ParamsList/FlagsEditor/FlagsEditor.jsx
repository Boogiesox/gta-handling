import React from 'react';
import PropTypes from 'prop-types';

import { flagsConfig } from '../../../constants';

// Helper to replace a string character at {index}
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

const PROP_TYPES = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    selectedGame: PropTypes.string.isRequired,
};

const DEFAULT_PROPS = {
    onChange: () => {},
};

// Reduce 16-bit hex byte values above to array of flags
// e.g. what numbers using 1, 2, 4, and 8 add up to the
// supplied hexValue's decimal value.
// e.g.e.g. 'B' hex == 11 dec. so using the options from
// highest possible (8) would give flags [8, 2, 1] 
// Heirarchy goes flags > byte > value
const getSelectedFlags = (hexValue) => {
    let  selectedFlags = [];
    let  decimal = parseInt(hexValue, 16); //convert from hex value to decimal

    // This just works the byte from the highest possible flag
    // (8) and working backward to find out what sequence adds
    // up to the decimal value using 1, 2, 4, and 8.
    for (let index = 8; index !== 0; index = index/2) {
        if(decimal >= index) {
            selectedFlags.push(index);
            decimal = decimal - index;
        }
    };

    return selectedFlags
};

const FlagInput = ({ onChange, label, byte, isSelected, index, value }) => {

    return (
        <div>
            <input
                type="checkbox"
                onChange={e => {
                    onChange({
                        action: isSelected ? 'remove' : 'add',
                        index,
                        value,
                    });
                }}
                checked={isSelected}
            />

            &nbsp;

            <label>
                {label}
            </label>
        </div>
    );
};

const FlagsEditor = ({ onChange, value, selectedGame }) => {
    const bytes = flagsConfig[selectedGame];

    return (
        <div>
            {
                bytes.map((byte, i) => {
                    const selectedFlags = getSelectedFlags(value[i]);

                    return (
                        <fieldset>
                            {
                                byte.values.map(flag => (
                                    <FlagInput
                                        onChange={update => {
                                            const updatedByteHex = update.action === 'add' ?
                                                value.replaceAt(update.index, (parseInt(value[update.index], 16) + update.value).toString(16).toUpperCase()) :
                                                value.replaceAt(update.index, (parseInt(value[update.index], 16) - update.value).toString(16).toUpperCase());
                                            const e = {
                                                target: {
                                                    value: updatedByteHex,
                                                }
                                            }
                                            onChange(e);
                                        }}
                                        label={flag.name}
                                        byte={byte}
                                        isSelected={selectedFlags.includes(flag.value)}
                                        index={i}
                                        value={flag.value}
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