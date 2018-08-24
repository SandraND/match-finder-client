import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-search-group-detail',
  templateUrl: './search-group-detail.component.html',
  styleUrls: ['./search-group-detail.component.css']
})
export class SearchGroupDetailComponent implements OnInit {
  @Input() group: {
    _id: any,
    groupname: string,
    numplayers: number,
    points: number,
    gametype: string,
    city: string,
    address: string,
    date: Date,
    description: string,
    game: string
  };
  user: any;

  constructor(
    private groupService: GroupService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  acceptOne(groupId: any) {
    this.groupService.acceptOne(this.user._id, groupId)
    .then((data) => {
      this.group = data;
      this.router.navigate(['/groups/search']);

    });
  }

}
