import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {League} from "../models/league";

@Injectable()
export class LeagueService {

  url: string = 'http://127.0.0.1:8080/api/leagues/';

  constructor(public http: Http) {

  }

  public getLeagues = () => {
    return this.http.get(this.url)
      .map((res: Response) => {
        let leagues: League[] = [];
        for (let l of res.json()['results']) {
          leagues.push(League.fromJson(l));
        }
        return leagues;
      })
      .catch((error: any) => Observable.throw(error))
  };

}
