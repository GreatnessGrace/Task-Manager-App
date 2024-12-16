import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private restService: RestService) {}

  onSignup() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
const url = environment.signup 
    this.restService.post(url, userData).subscribe(
      (response) => {
        console.log('Signup successful', response);
        // Redirect to login or show success message
      },
      (error) => {
        console.error('Signup error', error);
        this.errorMessage = 'Failed to create an account. Please try again later.';
      }
    );
  }

}
