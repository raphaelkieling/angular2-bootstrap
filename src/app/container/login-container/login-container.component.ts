import { ConfigService } from './../../services/config.service';
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

  language = null;

  constructor(public configS: ConfigService) {
    this.language = this.configS.language.getLanguage();
    console.log(this.language);
  }

  ngOnInit() { }

  onSubmit(form) {
    this.alert = {
      type: 'danger',
      strong: this.language.login.alert.errorLogin.strong,
      message: this.language.login.alert.errorLogin.message
    };
  }

  onSubmitForgot(form) {
    this.alert = {
      type: 'success',
      strong: this.language.login.alert.successForgot.strong,
      message: this.language.login.alert.successForgot.message
    };
  }

  clearAlert() {
    this.alert = null;
  }
}
