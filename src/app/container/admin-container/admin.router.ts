import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminContainerComponent } from './admin-container.component';


const routes: Routes = [
  { path: 'admin', component: AdminContainerComponent }
  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
