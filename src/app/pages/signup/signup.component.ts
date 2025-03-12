import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!: FormGroup; 

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    if (this.signupForm.valid) {
      this.loginService.signup(
        this.signupForm.value.name, 
        this.signupForm.value.email, 
        this.signupForm.value.password
      ).subscribe({
        next: () => {
          this.toastr.success("Registered successfully");
          this.signupForm.reset();
        },
        error: () => {
          this.toastr.error("Unexpected error! Please try again later");
        }
      });
    }
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
