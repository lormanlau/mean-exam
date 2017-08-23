import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs';

@Injectable()
export class ApiService {
	user = {
		name: "default"
	}
  constructor(private _http: Http) { }

  getUser(){
  	return this.user;
  }

  setUser(user){
  	this.user = user;
  }

  getPolls(){
  	return this._http.get('/polls')
  	.map(data => data.json())
  	.toPromise()
  }

  createPoll(poll){
  	this._http.post('/polls', poll)
  	.map(data => data.json())
  	.toPromise();
  }

  getOnePoll(id){
  	return this._http.get('/polls/'+ id)
  	.map(data => data.json())
  	.toPromise();
  }

  voteFor(poll_id, option){
  	this._http.get('/polls/' + poll_id + '/' + option)
  	.map(data => data.json())
  	.toPromise();
  }

  deletePoll(id){
  	this._http.delete('/polls/' + id)
  	.map(data => data.json())
  	.toPromise();
  }
}
