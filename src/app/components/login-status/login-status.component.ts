import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {
  isAuthenticted: boolean = false;
  userFullName: string = '';


  constructor(private oktaAuthService : OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth
  ) { }

  ngOnInit(): void {
    //Subscribe to authentication state cchanges
this.oktaAuthService.authState$.subscribe(
  (result)=> {
    this.isAuthenticted = result.isAuthenticated!;
    this.getUserDetails();
  }
)
  }
  getUserDetails() {
   if(this.isAuthenticted){
    //Fetch the logged in User details (users claims)
    //
    //user full name is exposed as a property name
    this.oktaAuth.getUser().then(
      (res)=> {
        this.userFullName= res.name as string;


      }
    )

   }
  }

  logout(){
    //Terminates the session with Okta and removes current tokens.
    this.oktaAuth.signOut();
  }

}