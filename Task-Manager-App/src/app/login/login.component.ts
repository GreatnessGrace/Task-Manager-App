import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor( private restService: RestService, private router: Router, private notificationService: NotificationService) { }
  
  onLogin() {
    const userData = {
      email: this.email,
      password: this.password,
    };
    const url = environment.login;

    this.restService.post(url, userData, { observe: 'response' }).subscribe(
      (response) => {
        console.log('Response from RestService:', response);
        const responseBody = response.body;
        console.log('Response body:', responseBody);

        if (response.status === 200) {
          this.notificationService.showSuccess('Login successful!');
          this.router.navigate(['/tasks']);
        } else if (responseBody && responseBody.message) {
          if (responseBody.message == "Invalid email or password") {
            this.notificationService.showError('Invalid email or password. Please try again.');
          } else {
            this.notificationService.showError('Login failed. Please try again.');
          }
        } else {
          this.notificationService.showError('Login failed. Please try again.');
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.notificationService.showError('Login failed. Please try again.');
  })};
}
