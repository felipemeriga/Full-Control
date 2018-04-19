import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ManagerComponent } from './manager/manager.component';


@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
