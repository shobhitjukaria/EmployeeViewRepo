import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns = ['f_name','l_name','company','city','state','zip','web','age'];
  employees : any;
  constructor( private employee : EmployeeService ) { }

  ngOnInit() {
      this.employee.viewEmployees().subscribe(
      (data)=> this.employees=data
      )
    };
}
