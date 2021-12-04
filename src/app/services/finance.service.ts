import {Injectable} from '@angular/core';
import {VehicleType} from '../interfaces/ivehicle.provider';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private readonly profitSource$ = new BehaviorSubject<number>(0);
  public totalProfit$ = this.profitSource$.asObservable();
  public workerProfit$ = this.totalProfit$.pipe(map((profit: number) => profit / 10));
  public terminalProfit$ = this.totalProfit$.pipe(map((profit: number) => profit - (profit / 10)));

  private readonly profits = {
    [VehicleType.van] : 7.50,
    [VehicleType.truck] : 7.50,
    [VehicleType.bus] : 7.50,
    [VehicleType.car] : 7.50,
  };

  constructor() {
  }

  public addProfit(type: VehicleType): void {
    const fee = this.profits[type];
    this.profitSource$.next(this.profitSource$.getValue() + fee);
  }

  public reset(): void {
    this.profitSource$.next(0);
  }
}
