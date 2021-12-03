import {Component, Input} from '@angular/core';
import {VehicleSummary, VehicleType} from '../../interfaces/ivehicle.provider';

@Component({
  selector: 'app-vehicle-slot',
  templateUrl: './vehicle-slot.component.html',
  styleUrls: ['./vehicle-slot.component.scss']
})
export class VehicleSlotComponent {

  @Input()
  public set vehicle(vehicle: VehicleSummary) {
    this.vehicleImgUrl = this.getVehicleImgUrl(vehicle.type);
  }

  public vehicleImgUrl: string;

  constructor() {
  }

  private getVehicleImgUrl(type: VehicleType): string {
    let url;
    switch (type) {
      case VehicleType.truck:
        url = 'assets/images/truck.png';
        break;
      case VehicleType.bus:
        url = 'assets/images/bus.png';
        break;
      case VehicleType.van:
        url = 'assets/images/van.png';
        break;
      default:
        url = 'assets/images/car.png';
        break;
    }
    return url;
  }
}
