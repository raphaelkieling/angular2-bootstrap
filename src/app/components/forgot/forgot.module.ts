import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsModule } from 'bootstrap-validator-quick';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsModule
  ],
  declarations: [ForgotComponent],
  exports: [ForgotComponent]
})
export class ForgotModule { }
