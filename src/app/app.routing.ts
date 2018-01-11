import { AdminContainerComponent } from './container/admin-container/admin-container.component';
import { LoginContainerComponent } from './container/login-container/login-container.component';
import { NotFoundComponent } from './container/404/notfound';
import { AppComponent } from './app.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginContainerComponent },
      { path: '**', component: NotFoundComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouting { }
