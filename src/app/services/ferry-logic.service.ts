import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {VehicleSize, VehicleSummary} from '../interfaces/ivehicle.provider';
import {FinanceService} from './finance.service';
import {AlertService} from './alert.service';

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

  constructor(private financeService: FinanceService,
              private alertService: AlertService) {
  }

  public loadVehicle(vehicle: VehicleSummary): void {
    if (!vehicle) {
      return;
    }
    this.financeService.addProfit(vehicle.type);
    this.loadOnFerry(vehicle);
  }

  public reset(): void {
    this.largeFerryLoadSource$.next([]);
    this.smallFerryLoadSource$.next([]);
    this.largeFerryCounterSource$.next(0);
    this.smallFerryCounterSource$.next(0);
  }

  private loadOnFerry(vehicle: VehicleSummary): void {
    let loadSource$: BehaviorSubject<VehicleSummary[]>;
    let ferryCapacity: number;
    let ferryCounterSource$: BehaviorSubject<number>;
    let size: string;

    if (vehicle.category === VehicleSize.small) {
      loadSource$ = this.smallFerryLoadSource$;
      ferryCapacity = this.smallFerryCapacity;
      ferryCounterSource$ = this.smallFerryCounterSource$;
      size = 'Small';
    } else {
      loadSource$ = this.largeFerryLoadSource$;
      ferryCapacity = this.largeFerryCapacity;
      ferryCounterSource$ = this.largeFerryCounterSource$;
      size = 'Large';
    }

    const ferryLoad = loadSource$.getValue();

    if (ferryLoad.length < ferryCapacity) {
      loadSource$.next([...ferryLoad, vehicle]);
    } else {
      loadSource$.next([vehicle]);
      ferryCounterSource$.next(ferryCounterSource$.getValue() + 1);
      this.alertService.setMessage(`${size} Ferry left terminal`);
    }
  }
}
