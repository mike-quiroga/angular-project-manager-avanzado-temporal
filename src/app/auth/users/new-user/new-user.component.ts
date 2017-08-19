import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor( private _formBuilder: FormBuilder ) { }

  ngOnInit() {
  }

  onSubmit( event: Event ) {
    event.preventDefault();
    console.log( 'Submit', this.form.value.user );
  }

  isRequired(field) {
    return this.form.get(`user.${field}`).hasError('required');
  }

  isInvalidEmail() {
    return this.form.get('user.email').hasError('email');
  }
}
