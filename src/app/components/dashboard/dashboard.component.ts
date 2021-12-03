import {Component} from '@angular/core';
import {FinanceService} from '../../services/finance.service';
import {FerryLogicService} from '../../services/ferry-logic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private financeService: FinanceService,
              private ferryLogicService: FerryLogicService) {
  }

  public reset() {
    this.financeService.reset();
    this.ferryLogicService.reset();
  }
}
