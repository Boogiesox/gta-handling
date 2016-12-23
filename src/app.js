import GTA3 from 'models/gta_iii';
import Papa from './node_modules/papaparse/papaparse.js';

export class App {
  constructor() {
    this.index = 0;
    this.vehicleSet = GTA3;
    this.vehicle = this.vehicleSet[0];
    
    this.next = () => {
      if(this.index < this.vehicleSet.length - 1) {
        this.index++;
        this.vehicle = this.vehicleSet[this.index];
      }
    };

    this.previous = () => {
      if(this.index > 0) {
        this.index--;
        this.vehicle = this.vehicleSet[this.index];
      }
    };

    this.generateConfig = () => {
      var config = Papa.unparse(this.vehicleSet, {
        quotes: false,
        delimiter: " ",
        newline: "\r\n",
        header: false
      });

      generateConfigAsFile(config);
    };

    function generateConfigAsFile(config) {      
      var textToWrite = config;
      var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
      var fileNameToSaveAs = "handling.cfg";
      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      window.URL = window.URL || window.webkitURL;
      location.href = window.URL.createObjectURL(textFileAsBlob);
    }

    function destroyClickedElement(event)
    {
        document.body.removeChild(event.target);
    }
  }
}

