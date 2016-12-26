export default {
    FIELD_CONFIG: {
        id: {
            name: "Vehicle ID",
            readonly: true,
            type: "text"
        },
        mass: {
            name: "Mass",
            maxlength: 10
        },
        dimx: {
            name: "Dimension X",
            step: 0.1
        },
        dimy: {
            name: "Dimension Y",
            step: 0.1
        },
        dimz: {
            name: "Dimension Z",
            step: 0.1
        },
        cmassx: {
            name: "Center of Mass X",
            step: 0.01
        },
        cmassy: {
            name: "Center of Mass Y",
            step: 0.01
        },
        cmassz: {
            name: "Center of Mass Z",
            step: 0.01
        },
        persubmerged: {
            name: "Percent Submerged"
        },
        tractionmult: {
            name: "Traction Multiplier",
            step: 0.01
        },
        tractionloss: {
            name: "Traction Loss",
            step: 0.01
        },
        tractionbias: {
            name: "Traction Bias",
            step: 0.01
        },
        numofgears: {
            name: "Number of Gears"
        },
        velocity: {
            name: "Number of Gears"
        },
        acceleration: {
            name: "Acceleration"
        },
        drivetype: {
            name: "Drive Type",
            maxlength: 1,
            type: "text"
        },
        enginetype: {
            name: "Engine Type",
            maxlength: 1,
            type: "text"
        },
        deceleration: { 
            name: "Deceleration"
        },
        brakebias: {
            name: "Brake Bias"
        },
        abs: {
            name: "Anti-lock Brakes"
        },
        steeringlock: {
            name: "Steering Lock"
        },
        suspensionforce: {
            name: "Suspension Force"
        },
        suspensiondamping: {
            name: "Suspension Damping"
        },
        seatoffset: {
            name: "Seat Offset"
        },
        collisiondamage: {
            name: "Collision Damage",
        },
        value: {
            name: "Monetary Value"
        },
        suspensionuplimit: {
            name: "Suspension Upper Limit"
        },
        suspensionlowlimit: {
            name: "Suspension Lower Limit"
        },
        suspensionbias: {
            name: "Suspension Bias"
        },
        flags: {
            name: "Flags",
            type: "text"
        },
        frontlights: {
            name: "Front Lights Size"
        },
        rearlights: {
            name: "Rear Light Size"
        }
    }
}