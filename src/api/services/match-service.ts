import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Match} from "../models/match";

@Injectable()
export class MatchService {

  url: string = 'http://127.0.0.1:8080/api/managers/matches/';


  constructor(public http: Http) {

  }

  public getMatches = (token: string) => {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization','Token ' + token);
    let options = new RequestOptions({headers: headers});

    return this.http.get(this.url, options)
      .map((res: Response) => {
        let matches = [];
        let results = res.json()['results'];
        for (let m of results) {
          matches.push(Match.fromJson(m));
        }
        return matches;
      })
      .catch((error: any) => Observable.throw(error.json().error || error));
  }

}
