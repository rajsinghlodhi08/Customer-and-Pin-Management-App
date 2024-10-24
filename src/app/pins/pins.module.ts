import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinsListComponent } from './pins-list/pins-list.component';
import { PinsRoutingModule } from './pins-routing.module';
import { AddCustomerOverlayComponent } from '../customers/add-customer/add-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
import { AddPinComponent } from './add-pin/add-pin.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ModalComponent } from '../shared/modal/modal.component';

@NgModule({
  declarations: [
    PinsListComponent,
    AddCustomerOverlayComponent,
    AddPinComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PinsRoutingModule,
    NgxSelectModule,
    FileUploadModule,
    
  ]
})
export class PinsModule { }
