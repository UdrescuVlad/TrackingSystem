import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Form, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  checkoutFormName;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
    this.checkoutFormName = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value){
    this.router.navigate(['/customer/name/' + value.name]);

    console.log(value.name);
    this.checkoutFormName.reset();
  }
}
