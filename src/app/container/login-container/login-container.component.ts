import { ConfigService } from './../../services/config.service';
import { IAlert } from './../../domain/interfaces/IAlert';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  loginForm = true;
  loading = false;

  language = null;
  constructor(
    public configS: ConfigService,
    private toastr: ToastrService,
    vcr: ViewContainerRef
  ) {
    this.language = this.configS.language.getLanguage();
  }

  ngOnInit() { }

  onSubmit(form) {
    this.toastr.error(
      this.language.login.alert.errorLogin.message,
      this.language.login.alert.errorLogin.strong
    );
  }

  onSubmitForgot(form) {
    this.toastr.success(
      this.language.login.alert.successForgot.message,
      this.language.login.alert.successForgot.strong
    );
  }
}
