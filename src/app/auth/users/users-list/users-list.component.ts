import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../services/users-list.service';
import { User } from '../models/user.model';
import { HttpService } from '../../../common/services/http.service';
import {Config} from '../../../common/config';
import {AuthenticationService} from 'app/common/services/authentication.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User> = [];
  apiBaseURL: string = Config.API_SERVER_URL;
  isLoading = true;

  constructor(private _userListService: UsersListService,
              private _httpService: HttpService,  private _authService: AuthenticationService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this._userListService.getAll().subscribe((users: User[] = []) => {
        this.users = users;
        this.isLoading = false;
        console.log('Users');
        console.log(users);
      },
      err => {
        console.error(err);
        this.isLoading = false;
      },
      () => {
        console.log('Finished!');
      });
  }
  public setData(sortedData) {
    console.log('sortedData: %o', sortedData);
    this.users = sortedData;
  }

  onDeleteUser(user: User) {
    const url = `${this.apiBaseURL}/users/${user.id}`;

    this._httpService.delete(url, this._authService.user.token).subscribe((response) => {
        console.log(response);
        this.getAllUsers();
      },
      err => {
        console.error(err);
      });
  }

}
