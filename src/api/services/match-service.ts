import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class MatchService {

  url: string = 'http://127.0.0.1:8080/api/matches/';


  constructor(public http: Http) {

  }

  public getMatches = () => {
    return this.http.get(this.url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || error));
  }

}
