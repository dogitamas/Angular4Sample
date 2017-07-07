import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

/*import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';*/

@Injectable()
export class DataService {

  //constructor(private http: Http) { }
  constructor() { }

  configuration = [
   { id: 1,  name: 'pageName', value: 'DogiSoft' },
   { id: 2, name: 'metaDesc', value: 'DogiSoft' },
   { id: 3, name: 'metaKeywords', value: 'DogiSoft' }
 ];



  /*
  private headers = new Headers({'Content-Type': 'application/json'});
  private Product = [];

  myData(): Promise<any> {

    const url = 'https://httpbin.org/get';

      return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(response => response.json().data)
        .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  */

}
