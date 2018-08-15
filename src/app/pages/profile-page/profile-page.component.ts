import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  private user: any;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  getUser(): any {
    return this.user;
  }
}
