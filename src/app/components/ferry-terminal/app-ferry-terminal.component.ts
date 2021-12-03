import {Component} from '@angular/core';
import {FerryLogicService} from '../../services/ferry-logic.service';
import {HardcodedVehicleService} from '../../services/hardcoded-vehicle.service';

@Component({
  selector: 'app-ferry-terminal',
  templateUrl: './app-ferry-terminal.component.html',
  styleUrls: ['./app-ferry-terminal.component.scss']
})
export class AppFerryTerminalComponent {

  constructor(private hardcodedVehicleService: HardcodedVehicleService,
              private ferryLogicService: FerryLogicService) {
  }

  public getVehicle(): void {
    this.ferryLogicService.loadVehicle(this.hardcodedVehicleService.GetVehicle());
  }
}
