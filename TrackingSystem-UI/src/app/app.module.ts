import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersService } from './services/customers/customers.service';
import { CustomersPageComponent } from './components/customers/customers-page.component';
import { SpecificCustomerComponent } from './components/specific-customer/specific-customer.component';
import { HistoryService } from './services/history/history.service';
import { HistoryComponent } from './components/history/history.component';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersPageComponent,
    SpecificCustomerComponent,
    HistoryComponent,
    SearchByNameComponent
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
