import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { Club } from '../models/club';

@Injectable()
export class ClubService {

  url: string = 'http://127.0.0.1:8080/api/clubs/';

  constructor(public http: Http) {

  }

  public getClubs = () => {
    return this.http.get(this.url)
      .map((res: Response) => {
        let clubs = [];
        let results = res.json()['results'];
        for (let c of results) {
          clubs.push(Club.fromJson(c));
        }
        return clubs;
      })
      .catch((error: any) => Observable.throw(error.json().error || error));
  };

}
