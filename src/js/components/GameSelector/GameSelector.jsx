import React from 'react';
import PropTypes from 'prop-types';

const PROP_TYPES = {
    selectedGame: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const DEFAULT_PROPS = {
    selectedGame: 'gta_iii',
    onChange: () => {},
};

const GAME_NAMES = {
    gta_iii: "GTA III",
    gta_vc: "GTA Vice City",
    gta_sa: "GTA San Andreas",
    gta_iv: "GTA IV",
};

const Option = ({ value, text }) => (
    <option value={value}>
        {text}
    </option>
);

const GameSelector = ({ onChange, selectedGame }) => {
    return (
        <div>
            <label>
                Game:&nbsp;
            </label>
            
            <select
                onChange={(e) => { onChange(e.target.value) }}
            >
                {
                    Object.keys(GAME_NAMES)
                        .map((k) => {
                            return <Option
                                key={`gameSelectOption_${k}`}
                                selected={selectedGame === k}
                                value={k}
                                text={GAME_NAMES[k]}
                            />
                        })
                }
            </select>
        </div>
    );
}

GameSelector.propTypes = PROP_TYPES;
GameSelector.defaultProps = DEFAULT_PROPS;

export default GameSelector;