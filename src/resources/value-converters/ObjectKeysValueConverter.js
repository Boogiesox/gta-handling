import constants from '../../constants'

export class ObjectKeysValueConverter {
    toView(obj) {
        var fields = [],
            fieldNameLookup = constants.FIELD_NAME_HASH;

        Object.keys(obj).forEach((key) => {
            fields.push({
                name: fieldNameLookup[key] || key,
                key: key
            });
        })
        return fields;
    }
}