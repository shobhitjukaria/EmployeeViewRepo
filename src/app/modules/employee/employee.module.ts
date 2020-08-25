import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { NavComponent } from '../nav/nav.component';
import { TableComponent } from '../table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterNamePipe } from '../../pipes/filter-name.pipe';
import { FormsModule} from '@angular/forms'


@NgModule({
  declarations: [EmployeeComponent,
    NavComponent,
    TableComponent,
    FilterNamePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule

  ],
  exports:[
    EmployeeComponent,
    NavComponent,
    TableComponent
  ]
})
export class EmployeeModule { }
