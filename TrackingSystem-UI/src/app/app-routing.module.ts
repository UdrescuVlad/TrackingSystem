import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersPageComponent } from './components/customers/customers-page.component';
import { SpecificCustomerComponent } from './components/specific-customer/specific-customer.component';
import { HistoryComponent } from './components/history/history.component';
import { SearchByIdComponent } from './components/search-by-id/search-by-id.component';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';

const routes: Routes = [
  {
    path: 'customer/search-by-id',
    component: SearchByIdComponent
  },
  {
    path: 'customer/search-by-name',
    component: SearchByNameComponent
  },
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
