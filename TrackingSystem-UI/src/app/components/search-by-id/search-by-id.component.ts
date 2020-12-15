import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {SearchByIdService} from '../../services/search-by-id/search-by-id.service';
import {CustomersService} from '../../services/customers/customers.service';
import { SpecificCustomerService } from '../../services/specific-customer/specific.customer.service';
import { SpecificCustomerComponent } from '../specific-customer/specific-customer.component';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-by-id',
  templateUrl: 'search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {
  checkoutForm;
  constructor(private router: Router,
              private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      id: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value){
    this.router.navigate(['/customer/' + value.id]);

    console.log(value);
    this.checkoutForm.reset();
  }

}
