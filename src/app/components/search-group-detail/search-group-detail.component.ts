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
  @Input() group: Object;
  user: any;
  // groupId: string;

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
    console.log('------PARAMS----------');
    console.log(this.route.params);
    console.log('---------CURRENT USER----------');
    console.log(this.user);
    console.log('---------USER ID----------');
    console.log(this.user._id);
    console.log('---------BUTTON ACTION----------');
    console.log('CLICK APPLY');
    console.log('---------GROUP INFO----------');
    console.log(this.group);

    this.groupService.acceptOne(this.user._id, groupId)
    .then((data) => {
      this.group = data;
      this.router.navigate(['/groups/search']);

    });
  }

}
