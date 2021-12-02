import {Component, Inject} from '@angular/core';
import {IVehicleProvider, VEHICLE_PROVIDER, VehicleSummary} from 'src/app/interfaces/ivehicle.provider';

@Component({
  selector: 'app-ferry-terminal',
  templateUrl: './app-ferry-terminal.component.html',
  styleUrls: ['./app-ferry-terminal.component.scss']
})
export class AppFerryTerminalComponent {
  currentVehicle: VehicleSummary;

  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider
  ) {
  }

  public getVehicle() {
    this.currentVehicle = this.vehicleProvider.GetVehicle();
    console.log(this.currentVehicle);
  }
}
