import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-game-list-all',
  templateUrl: './game-list-all.component.html',
  styleUrls: ['./game-list-all.component.css']
})
export class GameListAllComponent implements OnInit {

  games: any;

  constructor(
    private groupService: GroupService
  ) { }

  ngOnInit() {
    this.groupService.getAllGames()
    .then(data => this.games = data);
  }

}
