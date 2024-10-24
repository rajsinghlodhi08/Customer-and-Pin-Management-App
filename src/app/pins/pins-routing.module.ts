import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PinsListComponent } from './pins-list/pins-list.component';

const routes: Routes = [
  { path: '', component: PinsListComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinsRoutingModule { 

}
