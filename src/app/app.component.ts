import { Component } from '@angular/core';
import {GithubServices} from './services/github.services';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  providers:[GithubServices]
})
export class AppComponent  { 

 }
