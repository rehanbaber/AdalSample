import { environment } from '../environments/environment';
import { Http, Response, Headers } from '@angular/http';
import { Inject, Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Adal6Service } from 'adal-angular6';
@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  headers: Headers;

  constructor(
    private http: Http, private adalService: Adal6Service
  ) { }

  public checkApi()
  {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    let jwt = this.adalService.userInfo.token;
    this.headers.append('Authorization', 'Bearer ' + jwt);
    //console.log(localStorage.getItem('id_token'));
    console.log(jwt);
    return this.http.get(`${environment.apiUrl}PowerBI/GetEmbedReportData?reportId=236c4baa-d835-4580-8096-6369c28a9e1d`, { headers: this.headers })
    .map(
      (res: Response) => {
        return res.json() as any[];
      }).catch(this.handleError);
  }
  
  private handleError(error: any) {
    console.error('server error:', error);
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch (err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'server error');
  }
}
