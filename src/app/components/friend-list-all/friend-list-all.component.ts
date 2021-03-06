import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-friend-list-all',
  templateUrl: './friend-list-all.component.html',
  styleUrls: ['./friend-list-all.component.css']
})
export class FriendListAllComponent implements OnInit {

  users: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log('ON INIT FRIEND LIST ALL');
    this.userService.getAllUsers()
    .then(data => this.users = data);
  }

}
