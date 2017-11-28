import { Component } from '@angular/core';
import { GithubServices } from '../../services/github.services';

@Component({
  selector: 'profile',
  templateUrl: `./profile.component.html`,
})
export class ProfileComponent {
  user: any;
  repos: any[];
  username:string;

  constructor(private _githubService: GithubServices) {
      this.user=false;
  }

  searchUser(){
    this._githubService.updateUser(this.username);
    
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });


  }

}
