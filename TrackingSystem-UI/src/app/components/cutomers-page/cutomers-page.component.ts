import { Component, OnInit } from '@angular/core';
import { CustomersService} from '../../services/customers.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-cutomers-page',
  templateUrl: './cutomers-page.component.html',
  styleUrls: ['./cutomers-page.component.css']
})
export class CutomersPageComponent implements OnInit {

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
