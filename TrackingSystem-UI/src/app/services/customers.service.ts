import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get('/server/api/customers');
  }
  getSpecificCustomer(id: number) {
    return this.http.get('/server/api/customer/' + id);
  }
}
