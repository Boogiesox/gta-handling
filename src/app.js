import GTA3 from 'models/gta_iii';
import {ConfigService} from './configService';

export class App {
  static inject() { return [ConfigService]; }

  constructor(configService) {
    this.index = 0;
    this.vehicleSet = GTA3;
    this.vehicle = this.vehicleSet[this.index];
    
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
      var config = configService.parse(this.vehicleSet);
      configService.generateFile(config);
    };
  }
}