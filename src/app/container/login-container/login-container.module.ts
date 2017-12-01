import { AlertModule } from 'ngx-bootstrap/alert';
import { LoginContainerComponent } from './login-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../../components/login/login.module';

@NgModule({
    declarations: [LoginContainerComponent],
    imports: [
        CommonModule,
        LoginModule,
        AlertModule
    ],
    exports: [LoginContainerComponent],
    providers: [],
})
export class LoginContainerModule { }