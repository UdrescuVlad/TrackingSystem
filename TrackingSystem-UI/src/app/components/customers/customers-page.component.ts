import { Component, OnInit } from '@angular/core';
import { CustomersService} from '../../services/customers/customers.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  public customers;

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customersService.getCustomers().subscribe(
      data => {this.customers = data; },
      err => console.log(err),
      () => console.log('Customers has been loaded')
    );
  }

}
