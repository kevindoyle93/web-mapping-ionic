import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { Referee } from '../models/referee';

@Injectable()
export class RefereeService {

  url: string = 'http://127.0.0.1:8080/api/referees/';

  constructor(public http: Http) {

  }

  public getReferees = () => {
    return this.http.get(this.url)
      .map((res: Response) => {
        let refs = [];
        let results = res.json()['results'];
        for (let r of results) {
          refs.push(Referee.fromJson(r));
        }
        return refs;
      })
      .catch((error: any) => Observable.throw(error.json().error || error));
  }

}
