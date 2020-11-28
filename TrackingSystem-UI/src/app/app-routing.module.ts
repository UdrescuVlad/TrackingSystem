import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersPageComponent} from './components/customers/customers-page.component';
import { SpecificCustomerComponent} from './components/specific-customer/specific-customer.component';
import {HistoryComponent} from './components/history/history.component';

const routes: Routes = [
  {
    path: 'customer/:id',
    component: SpecificCustomerComponent
  },
  {
    path: 'customers',
    component: CustomersPageComponent
  },
  {
    path: 'customer/name/:name',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
