import {Team} from "./team";
export class League {
  name: string;
  teams: Team[];
  numPromoted: number;
  numRelegated: number;
  url: string;


  constructor(name: string, teams: Team[], numPromoted: number, numRelegated: number, url: string) {
    this.name = name;
    this.teams = teams;
    this.numPromoted = numPromoted;
    this.numRelegated = numRelegated;
    this.url = url;
  }

  public static fromJson = (data) => {
    let teams: Team[] = [];
    for (let t of data['teams']) {
      teams.push(Team.fromJson(t));
    }

    return new League(
      data['name'],
      teams,
      data['num_promoted'],
      data['num_relegated'],
      data['url']
    );
  };
}
