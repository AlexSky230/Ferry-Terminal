import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private readonly alertMessageSource$ = new BehaviorSubject<string>(null);
  public alertMessage$ = this.alertMessageSource$.asObservable();

  constructor() { }

  public setMessage(message: string): void {
    this.alertMessageSource$.next(message);
  }

  public clearMessage(): void {
    this.alertMessageSource$.next(null);
  }
}
