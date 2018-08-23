import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-applied-game-list',
  templateUrl: './applied-game-list.component.html',
  styleUrls: ['./applied-game-list.component.css']
})
export class AppliedGameListComponent implements OnInit {
  groups: any;

  constructor(
    private groupService: GroupService
  ) { }

  ngOnInit() {
  }

  getAppliedGroups () {
    this.groupService.getAppliedGroups()
    .then(data => {
      this.groups = data;
      console.log('DATA');
      console.log(data);
    });
  }


}
