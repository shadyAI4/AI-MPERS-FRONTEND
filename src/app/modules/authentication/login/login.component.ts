import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  islogin: boolean = true;
  emp_id : string ='';
  password: string = '';
  name : string = '';

  constructor(
    private authService: AuthService,
    private route: Router,
  ){

  }
  ngOnInit(): void {
    if (this.authService.alreadyLoggedIn()) {
      this.route.navigate(['']);
    }
  }

  async login() {
    console.log("This is the email ",this.emp_id)
    console.log("This is the password ", this.password)
    await this.authService
      .login(this.emp_id,this.password)
      .catch((err) => {
        Swal.fire({
          text: 'Invalid credentials',
          icon: 'error',
          allowOutsideClick: true,
          toast: true,
          position: 'bottom-right',
          showConfirmButton: false,
          timerProgressBar: true,
          padding: '20px',
          timer: 3000,
        });
      });
  }
}
