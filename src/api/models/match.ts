export class Match {
  league: any;
  homeTeam: any;
  awayTeam: any;
  date: Date;
  homeGoals: number;
  awayGoals: number;
  result: string;
  pitch: any;
  referee: any;

  constructor(league: any, homeTeam: any, awayTeam: any, date: Date, homeGoals: number, awayGoals: number, result: string, pitch: any, referee: any) {
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
}
