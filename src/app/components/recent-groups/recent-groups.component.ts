import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-recent-groups',
  templateUrl: './recent-groups.component.html',
  styleUrls: ['./recent-groups.component.css']
})
export class RecentGroupsComponent implements OnInit {

  constructor(
    private router: Router,
    private groupService: GroupService
  ) { }

  ngOnInit() {
  }


}
