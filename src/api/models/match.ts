import {Team} from "./team";

export class Match {
  url: string;
  league: string;
  homeTeam: Team;
  awayTeam: Team;
  date: Date;
  homeGoals: number;
  awayGoals: number;
  result: string;
  pitch: string;
  referee: string;


  constructor(url: string, league: string, homeTeam: Team, awayTeam: Team, date: Date, homeGoals: number, awayGoals: number, result: string, pitch: string, referee: string) {
    this.url = url;
    this.league = league;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.date = date;
    this.homeGoals = homeGoals;
    this.awayGoals = awayGoals;
    this.result = result;
    this.pitch = pitch;
    this.referee = referee;
  }

  public static fromJson = (data): Match => {
    return new Match(
      data['url'],
      data['league'],
      Team.fromJson(data['home_team']),
      Team.fromJson(data['away_team']),
      data['date'],
      data['home_goals'],
      data['away_goals'],
      data['result'],
      data['pitch'],
      data['referee']
    );
  };

}
