import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { NavComponent } from '../nav/nav.component';
import { TableComponent } from '../table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterNamePipe } from '../../pipes/filter-name.pipe';
import { FormsModule} from '@angular/forms';
import { SortPipe } from '../../pipes/sort.pipe';
import { NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    EmployeeComponent,
    TableComponent,
    FilterNamePipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule

  ],
  exports:[
    EmployeeComponent,
    NavComponent,
    TableComponent
  ]
})
export class EmployeeModule { }
