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
        });
    };

    generateFile(configBlob) {
        var textToWrite = configBlob,
            textFileAsBlob = new Blob(["; " + textToWrite], {type:'text/plain'}),
            downloadLink = document.createElement("a");

        downloadLink.download = "handling.cfg";
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        document.body.appendChild(downloadLink);
        downloadLink.click();
    };
}