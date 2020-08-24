import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { NavComponent } from '../nav/nav.component';
import { TableComponent } from '../table/table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EmployeeComponent,
    NavComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    EmployeeComponent,
    NavComponent,
    TableComponent
  ]
})
export class EmployeeModule { }
