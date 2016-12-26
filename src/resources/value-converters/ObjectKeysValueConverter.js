import constants from '../../constants'

export class ObjectKeysValueConverter {
    toView(obj) {
        var fields = [],
            fieldConfigSet = constants.FIELD_CONFIG;

        Object.keys(obj).forEach((key) => {
            fields.push({
                data: fieldConfigSet[key],
                key: key
            });
        })
        return fields;
    }
}