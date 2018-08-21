import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  username: string;
  password: string;
  feedbackEnabled: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.authService.signup({
      username: this.username,
        password: this.password
    })
    .then(() => {
        this.router.navigate(['/']);
    })
    .catch(error => {
        console.log(error);
    });
  }

}
