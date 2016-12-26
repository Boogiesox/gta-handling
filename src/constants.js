export default {
    FIELD_NAME_HASH: { // Mapping of vehicle prop keys to display strings
        id: "Vehicle ID",
        mass: "Mass",
        dimx: "Dimension X",
        dimy: "Dimension Y",
        dimz: "Dimension Z",
        cmassx: "Center of Mass X",
        cmassy: "Center of Mazz Y",
        cmassz: "Center of Mass Z",
        persubmerged: "Percent Submerged",
        tractionmult: "Traction Multiplier",
        tractionloss: "Traction Loss",
        tractionbias: "Traction Bias",
        numofgears: "Number of Gears",
        velocity: "Max Velocity",
        acceleration: "Acceleration",
        drivetype: "Drive Type",
        enginetype: "Engine Type",
        deceleration: "Deceleration",
        brakebias: "Brake Bias",
        abs: "Anti-lock Brakes",
        steeringlock: "Steering Lock",
        suspensionforce: "Suspension Force",
        suspensiondamping: "Suspension Damping",
        seatoffset: "Seat Offset",
        collisiondamage: "Collision Damage",
        value: "Monetary Value",
        suspensionuplimit: "Suspension Upper Limit",
        suspensionlowlimit: "Suspension Lower Limit",
        suspensionbias: "Suspension Bias",
        flags: "Flags",
        frontlights: "Front Lights Size",
        rearlights: "Rear Lights Size"
    },

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
        }
    }
}