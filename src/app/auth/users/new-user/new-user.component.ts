import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: [ './new-user.component.css' ]
} )
export class NewUserComponent implements OnInit {

  form = new FormGroup( {
    user: new FormGroup( {
      username: new FormControl( '' ),
      password: new FormControl( '' ),
      name: new FormControl( '' ),
      email: new FormControl( '' )
    } )
  } );

  constructor() { }

  ngOnInit() {
  }

  onSubmit( event: Event ) {
    event.preventDefault();
    console.log( 'Submit', this.form.value.user );
  }

}
