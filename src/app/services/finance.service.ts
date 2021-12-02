import { Injectable } from '@angular/core';
import {VehicleType} from '../interfaces/ivehicle.provider';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private readonly profitSource$ = new BehaviorSubject<number>(0);
  public profit$ = this.profitSource$.asObservable();
  public workersProfit$ = this.profit$.pipe(
    map((totalProfit: number) => {
      return totalProfit / 10;
    })
  );

  private readonly carFee = 5;
  private readonly vanFee = 7.50;
  private readonly truckFee = 10;
  private readonly busFee = 15;

  constructor() { }

  public addProfit(type: VehicleType): void {
    let fee: number;
    switch (type) {
      case VehicleType.van:
        fee = this.vanFee;
        break;
      case VehicleType.truck:
        fee = this.truckFee;
        break;
      case VehicleType.bus:
        fee = this.busFee;
        break;
      default:
        fee = this.carFee;
    }
    this.profitSource$.next(this.profitSource$.getValue() + fee);
  }

  public reset(): void {
    this.profitSource$.next(0);
  }
}
