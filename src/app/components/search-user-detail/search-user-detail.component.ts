import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-search-user-detail',
  templateUrl: './search-user-detail.component.html',
  styleUrls: ['./search-user-detail.component.css']
})
export class SearchUserDetailComponent implements OnInit {
  @Input() user: Object;
  userCurrent: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userCurrent = this.authService.getUser();

  }

  acceptOne(userId: any) {
    this.userService.acceptOne(userId, this.userCurrent._id)
    .then((data) => {
      this.user = data;
      this.router.navigate(['/']);
    });
  }

}
