import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {VehicleSize, VehicleSummary} from '../interfaces/ivehicle.provider';
import {FinanceService} from './finance.service';

@Injectable({
  providedIn: 'root'
})
export class FerryLogicService {

  // Large ferry
  private readonly largeFerryCounterSource$ = new BehaviorSubject<number>(0);
  public largeFerryCounter$ = this.largeFerryCounterSource$.asObservable();

  private readonly largeFerryLoadSource$ = new BehaviorSubject<VehicleSummary[]>([]);
  public largeFerryLoad$ = this.largeFerryLoadSource$.asObservable();

  // Small ferry
  private readonly smallFerryCounterSource$ = new BehaviorSubject<number>(0);
  public smallFerryCounter$ = this.smallFerryCounterSource$.asObservable();

  private readonly smallFerryLoadSource$ = new BehaviorSubject<VehicleSummary[]>([]);
  public smallFerryLoad$ = this.smallFerryLoadSource$.asObservable();

  private readonly smallFerryCapacity = 8;
  private readonly largeFerryCapacity = 6;

  constructor(private financeService: FinanceService) { }

  public loadVehicle(vehicle: VehicleSummary): void {
    console.log('service: ', vehicle);
    if (!vehicle) {
      // display error
      return;
    }
    this.financeService.addProfit(vehicle.type);
    switch (vehicle.category) {
      case VehicleSize.small:
        this.loadOnSmallFerry(vehicle);
        break;
      default:
        this.loadOnLargeFerry(vehicle);
    }
  }

  private loadOnLargeFerry(vehicle: VehicleSummary): void {
    console.log('large: ', vehicle);
    const ferryLoad = this.largeFerryLoadSource$.getValue();
    if (ferryLoad.length < this.largeFerryCapacity) {
      this.largeFerryLoadSource$.next([...ferryLoad, vehicle]);
    } else {
      this.largeFerryLoadSource$.next([]);
      this.largeFerryCounterSource$.next(this.largeFerryCounterSource$.getValue() + 1);
    }
  }

  private loadOnSmallFerry(vehicle: VehicleSummary): void {
    console.log('small: ', vehicle);
    const ferryLoad = this.smallFerryLoadSource$.getValue();
    if (ferryLoad.length < this.smallFerryCapacity) {
      this.smallFerryLoadSource$.next([...ferryLoad, vehicle]);
    } else {
      this.smallFerryLoadSource$.next([]);
      this.smallFerryCounterSource$.next(this.smallFerryCounterSource$.getValue() + 1);
    }
  }
}
