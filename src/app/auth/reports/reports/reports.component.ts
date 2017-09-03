import { Component, OnInit } from '@angular/core';
import { IssuesListService } from '../../issues/services/issues-list.service';
import { Issue } from '../../issues/models/issue.model';


@Component( {
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: [ './reports.component.css' ]
} )
export class ReportsComponent implements OnInit {

  issues:Array<Issue> = [];
  isLoading = true;
  openIssues:number;
  closedIssues:number;
  chartData:any;

  constructor( private _issuesListService:IssuesListService ) {
    this.chartData = {
      labels: [ 'Open', 'Closed' ],
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
        } ]
    };
  }

  ngOnInit() {
    this.getAllIssues();
  }

  getAllIssues() {
    this._issuesListService.getAll().subscribe( ( issues:Issue[] = [] ) => {
        this.issues = issues;
        this.isLoading = false;
        console.log( this.issues );
        this.countIssues();
      },
      err => {
        console.error( err );
        this.isLoading = false;
      },
      () => {
        console.log( 'Finished!' );
      } );
  }

  countIssues() {
    this.openIssues = this.issues.reduce( ( a, b ) => {
      return b.status === 'OPEN' ? a + 1 : a;
    }, 0 );
    this.closedIssues = this.issues.length - this.openIssues;
    this.chartData.datasets[ 0 ].data = [ this.openIssues, this.closedIssues ];
  }
}
