import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicOutletComponent } from './dynamic-outlet.component';
import { DynamicOutletErrorComponent } from '../dynamic-outlet-error/dynamic-outlet-error.component';



@NgModule({
  declarations: [
    DynamicOutletComponent,
    DynamicOutletErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DynamicOutletComponent]
})
export class DynamicOutletModule { }
