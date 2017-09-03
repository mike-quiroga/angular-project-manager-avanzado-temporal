import { Component, OnInit } from '@angular/core';
import { IssuesListService } from './services/issues-list.service';
import { Issue } from './models/issue.model';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {

  issues: Array<Issue> = [];
  isLoading = true;

  constructor(private _issuesListService: IssuesListService) { }

  ngOnInit() {
    this.getAllIssues();
  }

  getAllIssues() {
    this._issuesListService.getAll().subscribe((issues: Issue[] = []) => {
        this.issues = issues;
        this.isLoading = false;
      },
      err => {
        console.error(err);
        this.isLoading = false;
      },
      () => {
        console.log('Finished!');
      });
  }

}
