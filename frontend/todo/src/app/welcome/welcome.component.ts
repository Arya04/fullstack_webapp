import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = "THIS IS MY MESSAGE"
  username = ''

  //ActivatedRoute
  constructor(private route :ActivatedRoute) { 

  }

  ngOnInit() {
    //this.route.snapshot.params['name'];
    this.username = this.route.snapshot.params['name'];
  }

}
