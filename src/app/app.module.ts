import { RouterModule } from '@angular/router';
import { LoginContainerModule } from './container/login-container/login-container.module';
import { NotFoundModule } from './container/404/notfound.module';
import { AppRouting } from './app.routing';
import { InterceptorService } from './services/interceptor.service';
import { AmbientService } from './services/ambient.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BaseService } from './services/base.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AdminContainerModule } from './container/admin-container/admin-container.module';
import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouting,
    NotFoundModule,
    LoginContainerModule,
    AdminContainerModule,
    RouterModule,
    AlertModule.forRoot()
  ],
  providers: [
    BaseService,
    AuthService,
    AmbientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
