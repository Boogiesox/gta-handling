import React from 'react';
import PropTypes from 'prop-types';

import { flagsConfig } from '../../../constants';

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

const PROP_TYPES = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    selectedGame: PropTypes.string.isRequired,
};

const DEFAULT_PROPS = {
    byteCount: 4,
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
        if(decimal != 0) {
            if(decimal >= index) {
                selectedFlags.push(index);
                decimal = decimal - index;
            } 
        }
    };

    return selectedFlags
};

const ByteValue = ({ onChange, label, byte, isSelected }) => {

    return (
        <div>
            <label>
                {label}
            </label>
            
            <input
                type="checkbox"
                onChange={onChange}
                name={byte.value}
                checked={isSelected}
            />
        </div>
    );
};

const FlagsEditor = ({ onChange, value, selectedGame }) => {
    const bytes = flagsConfig[selectedGame];

    return (
        <div>
            {
                bytes.map((b, i) => {
                    const selectedFlags = getSelectedFlags(value[i]);

                    return (
                        <fieldset>
                            {
                                b.values.map(f => (
                                    <ByteValue
                                        onChange={onChange}
                                        label={f.id}
                                        byte={b}
                                        flag={value[i]}
                                        isSelected={selectedFlags.includes(f.value)}
                                    />
                                ))
                            }
                        </fieldset>
                    );
                })
            }
        </div>
    );
};

FlagsEditor.propTypes = PROP_TYPES;
FlagsEditor.defaultProps = DEFAULT_PROPS;

export default FlagsEditor;