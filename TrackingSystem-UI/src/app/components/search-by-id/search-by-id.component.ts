import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-by-id',
  templateUrl: 'search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {
  checkoutFormId;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
    this.checkoutFormId = this.formBuilder.group({
      id: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value){
    this.router.navigate(['/customer/' + value.id]);

    console.log(value);
    this.checkoutFormId.reset();
  }

}
