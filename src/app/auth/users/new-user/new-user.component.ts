import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../models/user.model';

import { UsersListService } from '../services/users-list.service';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: [ './new-user.component.css' ]
} )
export class NewUserComponent implements OnInit {

  form = this._formBuilder.group( {
    user: this._formBuilder.group( {
      username: [ '', Validators.required ], // new FormControl(...)
      password: [ '', Validators.required ],
      name: [ '', Validators.required ],
      email: [ '', [ Validators.required, Validators.email ] ]
    } )
  } );
  isLoading = true;
  showError = false;

  constructor( private _formBuilder: FormBuilder, private _usersListService: UsersListService, private router: Router) { }

  ngOnInit() {
    this.isLoading = false;
  }

  onSubmit( event: Event ) {
    event.preventDefault();
    console.log( 'Submit', this.form.value.user );
    this.isLoading = true;
    this.showError = false;
    this._usersListService.setUser(this.form.value.user).subscribe((user: User) => {
        console.log('User');
        console.log(user);
        this.isLoading = false;
        this.router.navigate(['/auth/usuarios']);
      },
      err => {
        console.error(err);
        this.isLoading = false;
        this.showError = true;
      },
      () => {
        console.log('Finished!');
      });
  }

  isRequired(field) {
    return this.form.get(`user.${field}`).hasError('required');
  }

  isInvalidEmail() {
    return this.form.get('user.email').hasError('email');
  }
}
