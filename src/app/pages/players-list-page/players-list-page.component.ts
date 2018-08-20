import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-players-list-page',
  templateUrl: './players-list-page.component.html',
  styleUrls: ['./players-list-page.component.css']
})
export class PlayersListPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;

  search: any;
  user: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.userService.getUsers(this.search)
      .then((result) => {
        this.user = result;
        this.processing = false;
      })
      .catch(err => {
        console.log('catch error players list page');
        this.error = err.error.code; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
    }
  }

}
