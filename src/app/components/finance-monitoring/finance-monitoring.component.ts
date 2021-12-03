import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FinanceService} from '../../services/finance.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-finance-monitoring',
  templateUrl: './finance-monitoring.component.html',
  styleUrls: ['./finance-monitoring.component.scss']
})
export class FinanceMonitoringComponent implements OnInit {

  public workersProfit: number;
  public profit$: Observable<number>;

  constructor(private financeService: FinanceService) {
  }

  public ngOnInit(): void {
    this.setProfit();
  }

  public reset(): void {
    this.financeService.reset();
  }

  private setProfit(): void {
    this.profit$ = this.financeService.profit$.pipe(
      tap((totalProfit: number) => {
        this.workersProfit = totalProfit / 10;
      })
    );
  }
}
