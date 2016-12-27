export default {
    FIELD_CONFIG: {
        id: {
            name: "Vehicle ID",
            hide: true
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
            type: "select",
            options: ["4", "F", "R"]
        },
        enginetype: {
            name: "Engine Type",
            maxlength: 1,
            type: "select",
            options: ["D", "P", "E"]
        },
        deceleration: { 
            name: "Deceleration",
            step: 0.01
        },
        brakebias: {
            name: "Brake Bias",
            step: 0.01
        },
        abs: {
            name: "Anti-lock Brakes",
            step: 0.01
        },
        steeringlock: {
            name: "Steering Lock",
            step: 0.01
        },
        suspensionforce: {
            name: "Suspension Force",
            step: 0.01
        },
        suspensiondamping: {
            name: "Suspension Damping",
            step: 0.01
        },
        seatoffset: {
            name: "Seat Offset",
            step: 0.01
        },
        collisiondamage: {
            name: "Collision Damage",
            step: 0.01
        },
        value: {
            name: "Monetary Value"
        },
        suspensionuplimit: {
            name: "Suspension Upper Limit",
            step: 0.01
        },
        suspensionlowlimit: {
            name: "Suspension Lower Limit",
            step: 0.01
        },
        suspensionbias: {
            name: "Suspension Bias",
            step: 0.01
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