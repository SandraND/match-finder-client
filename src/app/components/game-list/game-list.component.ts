import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any;

  constructor(
    private groupService: GroupService
  ) { }

  ngOnInit() {
    this.groupService.getGames()
    .then(data => this.games = data);
  }

}
