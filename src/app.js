import gta3 from 'models/gta_iii';
import gtaVc from 'models/gta_vc';
import gtaSa from 'models/gta_sa';
import gta4 from 'models/gta_iv';
import {ConfigService} from './configService';
import Constants from './constants';

export class App {
    static inject() { return [ConfigService]; }

    constructor(configService) {
        this.vehicleSet = gta3;
        this.index = 0;
        this.updateSelectedVehicle();
        this.configService = configService;
    }

    next() {
        if(this.index < this.vehicleSet.length - 1) {
            this.index++;
            this.updateSelectedVehicle();
        }
    };

    previous() {
        if(this.index > 0) {
            this.index--;
            this.updateSelectedVehicle();
        }
    };

    updateSelectedVehicle() {
        this.vehicle = this.vehicleSet[this.index];
    };

    generateConfig() {
        var config = this.configService.parse(this.vehicleSet);
        this.configService.generateFile(config);
    };
}