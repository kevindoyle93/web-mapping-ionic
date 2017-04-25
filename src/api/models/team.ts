export class Team {
  url: string;
  name: string;
  manager: string;
  league: string;
  club: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;


  constructor(url: string, name: string, manager: string, league: string, club: string, wins: number, draws: number, losses: number, points: number) {
    this.url = url;
    this.name = name;
    this.manager = manager;
    this.league = league;
    this.club = club;
    this.wins = wins;
    this.draws = draws;
    this.losses = losses;
    this.points = points;
  }

  public static fromJson = (data): Team => {
    return new Team(
      data['url'],
      data['name'],
      data['manager'],
      data['league'],
      data['club'],
      data['num_wins'],
      data['num_draws'],
      data['num_losses'],
      data['points']
    );
  };
}
