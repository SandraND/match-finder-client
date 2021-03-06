import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent implements OnInit {
  @Input() user: {
    _id: any,
    username: any
  };

  constructor() { }

  ngOnInit() {
  }

}
