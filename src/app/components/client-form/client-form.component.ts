import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
  signUpForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router,
    
  ) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ]),
      'address': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required]),
      'zip': new FormControl('', [Validators.required]),
      'phone': new FormControl(''),
      'role': new FormControl('client'),
      'about': new FormControl(null),
    });
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched()
    }

    this.authService
      .signUpUser(this.signUpForm.value)
      .then((result) => {
        if (result == null) {
          this.router.navigate(['client-task-form']);
        }
        return throwError(() =>  new Error('Failed login')); 
      })
      .catch(() => {});
  }
}
