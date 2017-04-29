import {Team} from "./team";
import {Pitch} from "./pitch";
import {Referee} from "./referee";

export class Match {
  url: string;
  league: string;
  homeTeam: Team;
  awayTeam: Team;
  date: Date;
  homeGoals: number;
  awayGoals: number;
  result: string;
  pitch: Pitch;
  referee: Referee;


  constructor(url: string, league: string, homeTeam: Team, awayTeam: Team, date: Date, homeGoals: number, awayGoals: number, result: string, pitch: Pitch, referee: Referee) {
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
      Pitch.fromJson(data['pitch']),
      Referee.fromJson(data['referee'])
    );
  };

}
