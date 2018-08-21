import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-applied-game-card',
  templateUrl: './applied-game-card.component.html',
  styleUrls: ['./applied-game-card.component.css']
})
export class AppliedGameCardComponent implements OnInit {
  @Input() group: Object;
  user: any;

  constructor() { }

  ngOnInit() {

  }


}
