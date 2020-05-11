import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersService } from './services/customers.service';
import { CutomersPageComponent } from './components/cutomers-page/cutomers-page.component';
import { SpecificCustomerComponent } from './components/specific-customer/specific-customer.component';
import {HistoryService} from './services/history/history.service';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    CutomersPageComponent,
    SpecificCustomerComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomersService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
