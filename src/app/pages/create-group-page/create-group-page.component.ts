import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group-page',
  templateUrl: './create-group-page.component.html',
  styleUrls: ['./create-group-page.component.css']
})
export class CreateGroupPageComponent implements OnInit {
  owner: string;
  groupname: string;
  numplayers: Number;
  numpoints: Number;
  gametype: string;
  city: string;
  address: string;
  date: Date;
  description: string;
  game: Object;

  constructor(
    private groupService: GroupService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.groupService.createOne({
      owner: this.owner,
      groupname: this.groupname,
      numplayers: this.numplayers,
      numpoints: this.numpoints,
      gametype: this.gametype,
      city: this.city,
      address: this.address,
      date: this.date,
      description: this.description,
      game: this.game
    })
    .then(() => {
      this.router.navigate(['/profile']);
    })
    .catch(error => {
      console.log(error);
    });
  }

}
