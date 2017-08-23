import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
	poll = {
		user: "",
		q_text: "",
		option0: {text: "", vote: 0},
		option1: {text: "", vote: 0},
		option2: {text: "", vote: 0},
		option3: {text: "", vote: 0},
	}
  constructor(private _api: ApiService) { }

  ngOnInit() {
  	this.poll.user = this._api.getUser().name;
  }
  submitPoll(){
  	this._api.createPoll(this.poll);
  }

}
