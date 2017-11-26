const FIELD_CONFIG = {
    id: {
        hide: true
    },
    mass: {
        name: "Mass",
        maxlength: 10,
        step: 1,
        type: "number",
    },
    dimx: {
        name: "Dimension X",
        step: 0.1,
        type: "number",
    },
    dimy: {
        name: "Dimension Y",
        step: 0.1,
        type: "number",
    },
    dimz: {
        name: "Dimension Z",
        step: 0.1,
        type: "number",
    },
    cmassx: {
        name: "Center of Mass X",
        step: 0.01,
        type: "number",
    },
    cmassy: {
        name: "Center of Mass Y",
        step: 0.01,
        type: "number",
    },
    cmassz: {
        name: "Center of Mass Z",
        step: 0.01,
        type: "number",
    },
    persubmerged: {
        name: "Percent Submerged",
        step: 1,
        type: "number",
    },
    tractionmult: {
        name: "Traction Multiplier",
        step: 0.01,
        type: "number",
    },
    tractionloss: {
        name: "Traction Loss",
        step: 0.01,
        type: "number",
    },
    tractionbias: {
        name: "Traction Bias",
        step: 0.01,
        type: "number",
    },
    numofgears: {
        name: "Number of Gears",
        step: 1,
        type: "number",
    },
    velocity: {
        name: "Max Velocity",
        step: 1,
        type: "number",
    },
    acceleration: {
        name: "Acceleration",
        step: 1,
        type: "number",
    },
    drivetype: {
        name: "Drive Type",
        type: "select",
        options: [
            { value: "4", name: "4-Wheel Drive" },
            { value: "F", name: "Front-Wheel Drive" },
            { value: "R", name: "Rear-Wheel Drive" }
        ]
    },
    enginetype: {
        name: "Engine Type",
        type: "select",
        options: [
            { value: "D", name: "Diesel" },
            { value: "P", name: "Petrol" },
            { value: "E", name: "Electric" }
        ]
    },
    deceleration: { 
        name: "Deceleration",
        step: 0.01,
        type: "number",
    },
    brakebias: {
        name: "Brake Bias",
        step: 0.01,
        type: "number",
    },
    abs: {
        hide: true
    },
    steeringlock: {
        name: "Steering Lock",
        step: 0.01,
        type: "number",
    },
    suspensionforce: {
        name: "Suspension Force",
        step: 0.01,
        type: "number",
    },
    suspensiondamping: {
        name: "Suspension Damping",
        step: 0.01,
        type: "number",
    },
    seatoffset: {
        name: "Seat Offset",
        step: 0.01,
        type: "number",
    },
    collisiondamage: {
        name: "Collision Damage",
        step: 0.01,
        type: "number",
    },
    value: {
        name: "Monetary Value",
        step: 1,
        type: "number",
    },
    suspensionuplimit: {
        name: "Suspension Upper Limit",
        step: 0.01,
        type: "number",
    },
    suspensionlowlimit: {
        name: "Suspension Lower Limit",
        step: 0.01,
        type: "number",
    },
    suspensionbias: {
        name: "Suspension Bias",
        step: 0.01,
        type: "number",
    },
    flags: {
        name: "Flags",
        type: "flags",
    },
    frontlights: {
        name: "Front Lights Type",
        type: "select",
        options: [
            { value: "0", name: "Long" },
            { value: "1", name: "Small" },
            { value: "2", name: "Big" },
            { value: "3", name: "Tall" }
        ]
    },
    rearlights: {
        name: "Rear Lights Type",
        type: "select",
        options: [
            { value: "0", name: "Long" },
            { value: "1", name: "Small" },
            { value: "2", name: "Big" },
            { value: "3", name: "Tall" }
        ]
    }
};

export default FIELD_CONFIG;