import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FinanceService} from '../../services/finance.service';

@Component({
  selector: 'app-finance-monitoring',
  templateUrl: './finance-monitoring.component.html',
  styleUrls: ['./finance-monitoring.component.scss']
})
export class FinanceMonitoringComponent implements OnInit {

  public totalProfit$: Observable<number>;
  public terminalProfit$: Observable<number>;
  public workerProfit$: Observable<number>;

  constructor(private financeService: FinanceService) {
  }

  public ngOnInit(): void {
    this.setProfits();
  }

  public reset(): void {
    this.financeService.reset();
  }

  private setProfits(): void {
    this.totalProfit$ = this.financeService.totalProfit$;
    this.terminalProfit$ = this.financeService.terminalProfit$;
    this.workerProfit$ = this.financeService.workerProfit$;
  }
}
