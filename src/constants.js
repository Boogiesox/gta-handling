export default {
    FIELD_CONFIG: {
        id: {
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
            name: "Max Velocity"
        },
        acceleration: {
            name: "Acceleration"
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
            step: 0.01
        },
        brakebias: {
            name: "Brake Bias",
            step: 0.01
        },
        abs: {
            hide: true
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
    },

    VEHICLE_NAMES: {
        "LANDSTAL": "Landstalker",
        "IDAHO": "Idaho",
        "STINGER": "Stinger",
        "LINERUN": "Linerunner",
        "PEREN": "Perennial",
        "SENTINEL": "Sentinel",
        "PATRIOT": "Patriot",
        "FIRETRUK": "Fire Truck",
        "TRASH": "Trashmaster",
        "STRETCH": "Stretch",
        "MANANA": "Manana",
        "INFERNUS": "Infernus",
        "BLISTA": "Blista",
        "PONY": "Pony",
        "MULE": "Mule",
        "CHEETAH": "Cheetah",
        "AMBULAN": "Ambulance",
        "FBICAR": "FBI Kuruma",
        "MOONBEAM": "Moonbeam",
        "ESPERANT": "Esperanto",
        "TAXI": "Taxi",
        "KURUMA": "Kuruma",
        "BOBCAT": "Bobcat",
        "MRWHOOP": "Mr. Whoopee",
        "BFINJECT": "BF Injection",
        "POLICE": "Police",
        "ENFORCER": "Enforcer",
        "SECURICA": "Securicar",
        "BANSHEE": "Banshee",
        "PREDATOR": "Predator",
        "BUS": "Bus",
        "RHINO": "Rhino",
        "BARRACKS": "Barracks OL",
        "TRAIN": "Train",
        "HELI": "Police Helicopter",
        "DODO": "Dodo",
        "COACH": "Coach",
        "CABBIE": "Cabbie",
        "STALLION": "Stallion",
        "RUMPO": "Rumpo",
        "RCBANDIT": "RC Bandit",
        "BELLYUP": "Belly Up",
        "MRWONGS": "Mr. Wong's",
        "MAFIA": "Mafia Sentinel",
        "YARDIE": "Yardie Lobo",
        "YAKUZA": "Yakuza Stinger",
        "DIABLOS": "Diablo Stallion",
        "COLUMB": "Cartel Cruiser",
        "HOODS": "Hoods Rumpo",
        "AIRTRAIN": "NPC Airliner",
        "DEADDODO": "NPC Dodo",
        "SPEEDER": "Speeder",
        "REEFER": "Reefer",
        "PANLANT": "Panlantic",
        "FLATBED": "Flatbed",
        "YANKEE": "Yankee",
        "BORGNINE": "Borgnine Cabbie"
    }
}