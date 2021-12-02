import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {VehicleSummary} from '../../interfaces/ivehicle.provider';
import {FerryLogicService} from '../../services/ferry-logic.service';

@Component({
  selector: 'app-large-ferry',
  templateUrl: './large-ferry.component.html',
  styleUrls: ['./large-ferry.component.scss']
})
export class LargeFerryComponent implements OnInit {

  public largeFerryLoad$: Observable<VehicleSummary[]>;
  public largeFerryCounter$: Observable<number>;

  constructor(private ferryLogicService: FerryLogicService) { }

  ngOnInit(): void {
    this.largeFerryLoad$ = this.ferryLogicService.largeFerryLoad$;
    this.largeFerryCounter$ = this.ferryLogicService.largeFerryCounter$;
  }
}
