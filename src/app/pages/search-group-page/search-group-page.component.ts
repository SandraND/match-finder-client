import { Component, OnInit, Injectable } from '@angular/core';
import { GroupService } from '../../services/group.service';


@Component({
  selector: 'app-search-group-page',
  templateUrl: './search-group-page.component.html',
  styleUrls: ['./search-group-page.component.css']
})
export class SearchGroupPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;

  group: any;
  search: any;

  constructor(
    private groupService: GroupService
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.groupService.searchGroup(this.search)
      .then((result) => {
        this.group = result;
        this.processing = false;
      })
      .catch(err => {
        this.error = err.error.code; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
    }
  }



}
