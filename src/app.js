import GTA3 from 'models/gta_iii';

export class App {
  constructor() {
    this.index = 0;
    this.vehicle = GTA3[0];
    
    this.next = () => {
      if(this.index < GTA3.length - 1) {
        this.index++;
        this.vehicle = GTA3[this.index];
      }
    };

    this.previous = () => {
      if(this.index > 0) {
        this.index--;
        this.vehicle = GTA3[this.index];
      }
    };
  }
}

