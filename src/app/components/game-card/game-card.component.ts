import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game: {
    _id: any,
    groupname: any,
    game: any
  };
  group: any;

  constructor(
  ) { }

  ngOnInit() {
  }

}
