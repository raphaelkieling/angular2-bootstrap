import { IAlert } from './../../domain/interfaces/IAlert';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.html',
  styles: [`
    .card{
            margin-top:70px;
        }

        .card-title{
          text-align: 'center'
        }
    `]
})
export class LoginContainerComponent implements OnInit {
  alert: IAlert = { type: 'danger', strong: 'Oh...', message: 'Has a problem in login' }

  constructor() { }

  ngOnInit() { }

  onSubmit(form) {
    console.log(form);
  }
}
