import { IAlert } from './../../domain/interfaces/IAlert';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit {

  @Output() submitForm = new EventEmitter<object>();
  @Output() valid = new EventEmitter<boolean>();
  @Input() loading = false;

  loginF: FormGroup;

  errors = {
    email: {
      email: 'Email is not valid'
    }
  };

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() { }


  submitEvent() {
    this.saveInfo(this.loginF.get('save').value);


    this.submitForm.emit(this.loginF.value);
  }

  private saveInfo(save) {
    (save) ?
      this.saveEmailInLocalStorage()
      :
      this.removeEmailFromLocalStorage();
  }

  buildForm() {
    this.loginF = this.formBuilder.group({
      email: [this.getEmailInLocalStorage(), Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.required],
      save: [this.hasEmail(this.getEmailInLocalStorage()), Validators.required]
    });
  }

  saveEmailInLocalStorage() {
    localStorage.setItem('saveEmail', this.loginF.get('email').value);
  }

  getEmailInLocalStorage() {
    const emailSaved = localStorage.getItem('saveEmail');
    return (emailSaved) ? emailSaved : '';
  }

  hasEmail(email) {
    return (email) ? true : false;
  }

  removeEmailFromLocalStorage() {
    localStorage.removeItem('saveEmail');
  }
}
