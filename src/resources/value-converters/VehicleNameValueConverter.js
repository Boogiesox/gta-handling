import constants from '../../constants'

export class VehicleNameValueConverter {
    toView(id) {
        var vehicleNames = constants.VEHICLE_NAMES;

        return vehicleNames[id] || id;
    }
}