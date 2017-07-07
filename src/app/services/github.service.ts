import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});

  myData(): Promise<any> {

    const url = 'https://api.github.com/repositories?since=364';

      return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
