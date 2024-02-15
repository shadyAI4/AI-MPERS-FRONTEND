import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StrongPasswordRegx } from 'src/app/shared/components/validators/validators';
import { registerUsersMutation } from 'src/app/store/entities/usermanagement/system-user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  first_name :string | any;
  last_name: string | any;
  username: string | any;
  email: string | any;
  password : string | any;
  confirm_password: string | any;
  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private store: Store,
    private fb :FormBuilder,
    private route: Router,
  ){}
  
  ngOnInit(): void {
    this.registerForm =this.fb.group({
      userLastName:[null, Validators.required],
      userFirstName: [null, Validators.required],
      profileTitle: [null, Validators.required],
      userNickname: [null, Validators.required],
      profileType: [null, Validators.required],
      password: [null,[Validators.required, Validators.pattern(StrongPasswordRegx)]],
      confirmPassword: [null,[Validators.required, Validators.pattern(StrongPasswordRegx)]],
  
    },
    // {
    //   validator: ConfirmPasswordValidator("password", "confirm_password")
    // }
    );
  }

  registerUser(formValues : any){
    console.log(formValues['password'])
    if(formValues['password'] !== formValues['confirmPassword']){
      this.submitted =true
    }
    else{
      console.log(formValues)
      this.store.dispatch(registerUsersMutation({
        input:formValues
      }))
    }
    this.route.navigate(['/login'])
    
  }
}
