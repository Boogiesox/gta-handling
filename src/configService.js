import Papa from './node_modules/papaparse/papaparse.js';

export class ConfigService {
    constructor() {
        this.papa = Papa;
    }

    parse(data) {
        return this.papa.unparse(data, {
            quotes: false,
            delimiter: " ",
            newline: "\r\n",
            header: false
        });
    }
}