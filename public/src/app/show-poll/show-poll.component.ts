import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs'

@Component({
  selector: 'app-show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {
	poll = {
		_id: 0,
		user: "",
		q_text: "",
		option0: {text: "", vote: 0},
		option1: {text: "", vote: 0},
		option2: {text: "", vote: 0},
		option3: {text: "", vote: 0},
	}
  constructor(private _api: ApiService,private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getPoll();
  }
  getPoll(){
  	this.route.paramMap.switchMap(params => {
  		return this._api.getOnePoll(params.get('id'))
  	})
  	.subscribe(data => this.poll = data);
  }
  vote(option){
  	//is might be reduntant but it doesn't update on first click if not...
  	this.getPoll();
  	this._api.voteFor(this.poll._id, option);
  	this.getOnePoll();
  }
  getOnePoll(){
  	this._api.getOnePoll(this.poll._id)
  	.then(data => this.poll = data)
  	.catch(errors => {console.log(errors)})
  }

}
