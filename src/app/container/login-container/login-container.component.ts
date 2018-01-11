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

        .small-ng-content{
          font-size:14px;
        }

        a{
          cursor:pointer;
        }
    `]
})
export class LoginContainerComponent implements OnInit {
  alert: IAlert;
  loginForm = true;
  loading = false;

  constructor() { }

  ngOnInit() { }

  onSubmit(form) {
    this.alert = { type: 'danger', strong: 'Oh...', message: 'Has a problem in login' };
  }

  onSubmitForgot(form) {
    this.alert = { type: 'success', strong: 'Oh...', message: 'Email has sended' };
  }

  clearAlert() {
    this.alert = null;
  }
}
