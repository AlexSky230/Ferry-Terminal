import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LocalMaterialModule} from './shared-modules/local-material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FerryMonitoringComponent } from './components/ferry-monitoring/ferry-monitoring.component';
import { SmallFerryComponent } from './components/ferry-monitoring/components/small-ferry/small-ferry.component';
import { LargeFerryComponent } from './components/ferry-monitoring/components/large-ferry/large-ferry.component';
import { FinanceMonitoringComponent } from './components/finance-monitoring/finance-monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FerryMonitoringComponent,
    SmallFerryComponent,
    LargeFerryComponent,
    FinanceMonitoringComponent
  ],
  imports: [
    BrowserModule,
    LocalMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
