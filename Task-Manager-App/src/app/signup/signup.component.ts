import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private restService: RestService, private router: Router, private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
   
  }

  onSignup() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    const url = environment.signup;
  
    this.restService.post(url, userData, { observe: 'response' }).subscribe(
      (response) => {
        console.log('Response from RestService:', response);
        const responseBody = response.body;
        console.log('Response body:', responseBody);
  
        if (response.status === 201) {
          this.notificationService.showSuccess('Signup successful!');
          this.router.navigate(['/login']);
        } else if (responseBody && responseBody.message) {
          console.log("here")
          if (responseBody.message == "User already exists") {
            console.log("there")

            this.notificationService.showError('User already exists. Please try with a different email.');
          } else {
            console.log("hre")

            this.notificationService.showError('Signup failed. Please try again.');
          }
        } else {
          console.log("he")

          this.notificationService.showError('Signup failed. Please try again.');
        }
      },
      (error) => {
        console.error('Signup error:', error);
        this.notificationService.showError('Signup failed. Please try again.');
      }
    );
  }
  
  
  
  

}
