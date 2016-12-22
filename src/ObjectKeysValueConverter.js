export class ObjectKeysValueConverter {
    toView(obj) {
        // Create a temporary array to populate with object keys
        let temp = [];
        
        return Object.keys(obj);
    }
}