import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  form: FormGroup;

  @Output() submitForm = new EventEmitter<any>();
  @Output() back = new EventEmitter<any>();

  errors = {
    email: {
      required: 'The field is required',
      email: 'Email not valid'
    }
  }

  constructor(public formBuilder: FormBuilder) {
    this.buildForm();
  }


  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])]
    });
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }

  backPage() {
    this.back.emit();
  }

}
