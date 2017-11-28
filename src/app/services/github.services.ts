import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubServices{
    private username:string;
    private client_id='b3e31c70253bdbea6dca';
    private client_secret='532eb642ef0eeabc8de4667dbc1b10af029e9e57';

constructor(private _http:Http){
    console.log('Github Service ready...');
    this.username='ArjunKanakeGowda';
}

getUser(){
    return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res=>res.json());
}

getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res=>res.json());
}
updateUser(username:string){
this.username=username;
}
}
