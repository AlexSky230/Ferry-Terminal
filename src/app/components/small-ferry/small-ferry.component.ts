import { Component, OnInit } from '@angular/core';
import {VehicleSummary} from '../../interfaces/ivehicle.provider';
import {Observable} from 'rxjs';
import {FerryLogicService} from '../../services/ferry-logic.service';

@Component({
  selector: 'app-small-ferry',
  templateUrl: './small-ferry.component.html',
  styleUrls: ['./small-ferry.component.scss']
})
export class SmallFerryComponent implements OnInit {

  public smallFerryLoad$: Observable<VehicleSummary[]>;
  public smallFerryCounter$: Observable<number>;

  constructor(private ferryLogicService: FerryLogicService) { }

  ngOnInit(): void {
    this.smallFerryLoad$ = this.ferryLogicService.smallFerryLoad$;
    this.smallFerryCounter$ = this.ferryLogicService.smallFerryCounter$;
  }

}
