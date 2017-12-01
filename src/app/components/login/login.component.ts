import { IAlert } from './../../domain/interfaces/IAlert';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.html'
})
export class LoginComponent implements OnInit {

    @Output() submit = new EventEmitter<object>();
    @Output() valid = new EventEmitter<boolean>();
    @Input() loading = false;
    
    loginF: FormGroup;

    constructor(
        public formBuilder: FormBuilder
    ) {
        this.constroiFormulario();
    }

    ngOnInit() { }


    submitEvent() {
        (this.loginF.get('save').value) ?
            this.salvarEmail()
            :
            this.retirarEmailDaMemoria()


        this.submit.emit(this.loginF.value);
    }

    constroiFormulario() {
        this.loginF = this.formBuilder.group({
            email: [this.pegaEmail(), Validators.compose([
                Validators.required,
                Validators.email
            ])],
            password: ['', Validators.required],
            save: [this.hasEmail(this.pegaEmail()), Validators.required]
        })
    }

    salvarEmail() {
        localStorage.setItem('saveEmail', this.loginF.get('email').value);
    }

    pegaEmail() {
        const emailSaved = localStorage.getItem('saveEmail')
        return (emailSaved) ? emailSaved : '';
    }

    hasEmail(email) {
        return (email) ? true : false;
    }

    retirarEmailDaMemoria() {
        localStorage.removeItem('saveEmail');
    }
}