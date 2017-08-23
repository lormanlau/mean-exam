import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	polls;
	user
  constructor(private _api: ApiService) { }

  ngOnInit() {
  	this.getPolls();
  	this.getUser();
  }
  getUser(){
  	this.user = this._api.getUser();
  }

  getPolls(){
  	this._api.getPolls()
  	.then(data => this.polls = data)
  	.catch(errors => { console.log(errors) });
  }

  delete(id){
  	this._api.deletePoll(id);
  }
}
