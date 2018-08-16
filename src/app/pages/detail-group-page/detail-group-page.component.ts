import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-detail-group-page',
  templateUrl: './detail-group-page.component.html',
  styleUrls: ['./detail-group-page.component.css']
})
export class DetailGroupPageComponent implements OnInit {

  group: any;

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.groupService.getGroup(params.id)
      .then(data => this.group = data);
    });
  }

}
