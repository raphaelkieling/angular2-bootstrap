import { AuthGuard } from './../../guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminContainerComponent } from './admin-container.component';


const routes: Routes = [
  { path: 'admin', canActivate: [AuthGuard], component: AdminContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
