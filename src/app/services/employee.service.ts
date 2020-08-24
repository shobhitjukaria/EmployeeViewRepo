import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient) { }

  viewEmployees() {
    let data= this.http.get('https://5f37efc3bbfd1e00160bf767.mockapi.io/ap/v1/users');
    console.log(data);
    return data;
  }

}
