import { Component, OnInit } from '@angular/core';
import {SpecificCustomerService} from '../../services/specific-customer/specific.customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-specific-customer',
  templateUrl: './specific-customer.component.html',
  styleUrls: ['./specific-customer.component.css']
})
export class SpecificCustomerComponent implements OnInit {

  public customerReg;
  constructor(private specificCustomer: SpecificCustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomer(this.route.snapshot.params.id);
  }
  getCustomer(id: number){
    this.specificCustomer.getSpecificCustomer(id).subscribe(
      data => {
        this.customerReg = data;
      },
      err => console.error('We did not found this id'),
      () => console.log('')
    );
  }

}
