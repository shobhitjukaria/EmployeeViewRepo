import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../modules/interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient) { }

  viewEmployees() {
    return this.http.get<Employee[]>('https://5f37efc3bbfd1e00160bf767.mockapi.io/ap/v1/users');
  }
}
