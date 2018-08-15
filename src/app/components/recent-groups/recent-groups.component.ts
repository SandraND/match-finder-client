import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-groups',
  templateUrl: './recent-groups.component.html',
  styleUrls: ['./recent-groups.component.css']
})
export class RecentGroupsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


}
