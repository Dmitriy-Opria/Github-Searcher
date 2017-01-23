import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export  class  GithubService{
  private username: string;
  private client_id = '8e0ed1514620f2005b2d';
  private client_secret = '79bb17ac19dc6af73a06cd12a2841e3b4e7d5459';
  
  constructor(private _http: Http){
    console.log("GitHub Service Ready...");
    this.username = "Dmitriy-Opria";
  }
  
  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }
  
  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }
  updateUser(username: string){
    this.username = username;
  }
  
}
