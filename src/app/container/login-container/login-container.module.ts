import { ForgotModule } from './../../components/forgot/forgot.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { LoginContainerComponent } from './login-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../../components/login/login.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginContainerComponent],
    imports: [
        CommonModule,
        LoginModule,
        AlertModule,
        RouterModule,
        ForgotModule
    ],
    exports: [LoginContainerComponent],
    providers: [],
})
export class LoginContainerModule { }
