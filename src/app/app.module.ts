import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LocalMaterialModule} from './shared-modules/local-material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FerryMonitoringComponent } from './components/ferry-monitoring/ferry-monitoring.component';
import { SmallFerryComponent } from './components/small-ferry/small-ferry.component';
import { LargeFerryComponent } from './components/large-ferry/large-ferry.component';
import { FinanceMonitoringComponent } from './components/finance-monitoring/finance-monitoring.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppFerryTerminalComponent } from './components/ferry-terminal/app-ferry-terminal.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FerryMonitoringComponent,
    SmallFerryComponent,
    LargeFerryComponent,
    FinanceMonitoringComponent,
    AppFerryTerminalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    LocalMaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
