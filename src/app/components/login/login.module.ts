import { LoadingModule } from './../loading/loading.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsModule } from 'bootstrap-validator-quick';
@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LoadingModule,
        BsModule
    ],
    exports: [LoginComponent],
    providers: [],
})
export class LoginModule { }
