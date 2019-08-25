import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "Admin"
  password = ""
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username);

    //if(this.username==="Admin" && this.password === "admin"){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.invalidLogin = false;
      //Redirect to welcome page
      this.router.navigate(['welcome',this.username]);
    }
    else{
      this.invalidLogin = true;
    }

  }

}
