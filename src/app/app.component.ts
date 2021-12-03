import {Component, OnInit} from '@angular/core';
import {AlertService} from './services/alert.service';
import {Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ferryServicesTest';
  public alertMessage$: Observable<string>;

  constructor(private alertService: AlertService) {
  }

  public ngOnInit(): void {
    this.alertMessage$ = this.alertService.alertMessage$;
    this.alertService.alertMessage$.pipe(
      debounceTime(4000)
    ).subscribe(() => this.resetAlertMessage());
  }

  public resetAlertMessage(): void {
    this.alertService.clearMessage();
  }
}
