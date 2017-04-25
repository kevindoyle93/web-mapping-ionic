import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

  url: string = 'http://127.0.0.1:8080/api-token-auth/';


  constructor(public http: Http) {

  }

  public getToken = (username: string, password: string) => {
    return this.http.post(this.url, {username: username, password: password})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }

}
