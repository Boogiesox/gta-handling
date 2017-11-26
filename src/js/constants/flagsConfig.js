const FLAGS_CONFIG = {
    gta_iii: [
        {
            values: [
                {
                    value: 1,
                    id: '1G_BOOST',
                    name: '1G Boost',
                    description: 'Makes tyres spin more readily from standing starts.',
                },
                {
                    value: 2,
                    id: '2G_BOOST',
                    name: '2G Boost',
                    description: 'Makes tyres spin more readily at low speeds.',
                },
                {
                    value: 4,
                    id: 'REV_BONNET',
                    name: 'Reverse Bonnet Hinge',
                    description: 'Reverses the direction boot and bonnet axis operate.',
                },
                {
                    value: 8,
                    id: 'HANGING_BOOT',
                    name: 'Hanging Boot',
                    description: 'Affects physics of boot hinged from the top.',
                },
            ],
        },
        {
            values: [
                {
                    value: 1,
                    id: 'NO_DOORS',
                    name: 'No Doors',
                    description: 'Removes all testing for doors.',
                },
                {
                    value: 2,
                    id: 'IS_VAN',
                    name: 'Is Van',
                    description: 'Allows double boot object.',
                },
                {
                    value: 4,
                    id: 'IS_BUS',
                    name: 'Is Bus',
                    description: 'Uses Coach version of animations over standard one and makes the driver invisible (only makes sense to use on Coach).',
                },
                {
                    value: 8,
                    id: 'IS_LOW',
                    name: 'Is Low',
                    description: 'Uses low version of animations over standard one.',
                },
            ],
        },
        {
            values: [
                {
                    value: 1,
                    id: 'DBL_EXHAUST',
                    name: 'Double Exhaust',
                    description: 'Creates a second exhaust by mirroring the model\'s exhaust over the y-axis.',
                },
                {
                    value: 2,
                    id: 'TAILGATE_BOOT',
                    name: 'Tailgate Boot',
                    description: 'Affects physics of boot hinged from the bottom.',
                },
                {
                    value: 4,
                    id: 'NOSWING_BOOT',
                    name: 'No Swing Boot',
                    description: 'When damaged, boot does not swing if it normally does and falls off instead.',
                },
                {
                    value: 8,
                    id: 'NONPLAYER_STABILISER',
                    name: 'Non-Playabe Stabilizer',
                    description: 'Seems to have no effect, could be related to how the AI operates the vehicle',
                },
            ],
        },
        {
            values: [
                {
                    value: 1,
                    id: 'NEUTRALHANDLING',
                    name: 'Neutral Handling',
                    description: 'Seems to have no effect, could be related to how the AI operates the vehicle',
                },
                {
                    value: 2,
                    id: 'HAS_NO_ROOF',
                    name: 'No Roof',
                    description: 'Various slight effects.',
                },
                {
                    value: 4,
                    id: 'IS_BIG',
                    name: 'Is Big',
                    description: 'Changes the way that the AI drives around corners.',
                },
                {
                    value: 8,
                    id: 'HALOGEN_LIGHTS',
                    name: 'Halogen Lights',
                    description: 'Bluish headlights.',
                },
            ],
        },
    ],
};

export default FLAGS_CONFIG;