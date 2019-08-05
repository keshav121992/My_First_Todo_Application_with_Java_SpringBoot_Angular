import { Injectable } from '@angular/core';

//i can inject this any place where we want
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before '+ this.isUerLoggedIn());
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      //
      console.log('after', this.isUerLoggedIn());
      return true;
    }
    return false;
  }


  isUerLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)

  }

  logOut(){
    sessionStorage.removeItem('authenticatedUser')
  }



}
