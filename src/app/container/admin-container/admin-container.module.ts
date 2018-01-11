import { NavbarModule } from './../../components/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContainerComponent } from './admin-container.component';
import { AdminRoutingModule } from './admin.router';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    AdminRoutingModule
  ],
  declarations: [AdminContainerComponent]
})
export class AdminContainerModule { }
