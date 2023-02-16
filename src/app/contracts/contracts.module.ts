
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsRoutingModule } from './contracts-routing.module';
import { AddContractComponent } from './add-contract/add-contract.component';
import { ShowContractComponent } from './show-contract/show-contract.component';
import { UploadComponent } from './upload/upload.component';
import { IndexComponent } from './index/index.component';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import {MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { ClickOutsideModule } from 'ng-click-outside';
import { DatePipe } from '@angular/common';
import  * as _ from 'lodash';


@NgModule({
  declarations: [
    AddContractComponent,
    ShowContractComponent,
    UploadComponent,
    IndexComponent,  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ClickOutsideModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [DatePipe]
})
export class ContractsModule { }
