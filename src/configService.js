import Papa from './node_modules/@boogiesox/papaparse/papaparse.js';

export class ConfigService {
    constructor() {
    }

    parse(data) {
        return Papa.unparse(data, {
            quotes: false,
            delimiter: " ",
            newline: "\r\n",
        });
    };

    generateFile(configBlob) {
        var textToWrite = configBlob,
            textFileAsBlob = new Blob([textToWrite + "\r\n;\r\n;the end\r\n"], {type:'text/plain'}),
            downloadLink = document.createElement("a");

        downloadLink.download = "handling.cfg";
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        document.body.appendChild(downloadLink);
        downloadLink.click();
    };
}