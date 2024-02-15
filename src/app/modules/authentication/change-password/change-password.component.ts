import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  password:string | any;
  password1:string | any;
  password2:string | any;
  hide = true;

  submitForm() {

  }

}
