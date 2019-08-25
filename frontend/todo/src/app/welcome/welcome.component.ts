import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = "THIS IS MY MESSAGE"
  username = ''
  welcomeMessage = ''

  //ActivatedRoute
  constructor(private route :ActivatedRoute, private welcomeDataService : WelcomeDataService) { 

  }

  ngOnInit() {
    //this.route.snapshot.params['name'];
    this.username = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.welcomeDataService.executeHelloWorldBean());
    this.welcomeDataService.executeHelloWorldBean().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParam(){
    this.welcomeDataService.executeHelloWorldVariable(this.username).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessage = response.message;
    console.log(response);
    console.log(response.message);

  }

  handleErrorResponse(error){
    this.welcomeMessage = error.error.message;
  }

}
