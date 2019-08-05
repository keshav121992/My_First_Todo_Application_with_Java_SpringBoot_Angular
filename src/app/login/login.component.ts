
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     username = 'in28minutes'
     password = ''
     errorMessage = 'Invalid Credentials'
     invalidLogin = false
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) {}

  ngOnInit() {
  }

  handleLogin(){
    //if(this.username === 'in28Minutes' && this.password === 'dummy')
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      //dependency Injection i want to route welcome page 
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    }
    else{
      this.router.navigate(['error'])
      this.invalidLogin = true
    }
  }
}
