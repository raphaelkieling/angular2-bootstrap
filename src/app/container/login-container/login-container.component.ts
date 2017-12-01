import { IAlert } from './../../domain/interfaces/IAlert';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-container',
    templateUrl: './login-container.html',
    styles: [`
    .card{
            margin-top:70px;
        }
    `]
})
export class LoginContainerComponent implements OnInit {
    alert: IAlert = { type: 'danger', strong: 'Droga...', message: 'Houve algum problema ao logar' }

    constructor() { }

    ngOnInit() { }
}