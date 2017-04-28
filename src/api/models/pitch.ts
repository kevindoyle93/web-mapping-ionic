import {Club} from "./club";


export class Pitch {
  name: string;
  location: any;
  clubs: Club[];


  constructor(name: string, location: any, clubs: Club[]) {
    this.name = name;
    this.location = location;
    this.clubs = clubs;
  }

  public static fromJson = (data) => {
    let clubs: Club[] = [];
    for (let c of data['clubs']) {
      clubs.push(Club.fromJson(c));
    }

    return new Pitch(
      data['name'],
      data['location'],
      clubs
    );
  };

}
