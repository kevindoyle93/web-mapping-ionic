export class Team {
  url: string;
  name: string;
  manager: string;
  league: string;
  club: string;


  constructor(url: string, name: string, manager: string, league: string, club: string) {
    this.url = url;
    this.name = name;
    this.manager = manager;
    this.league = league;
    this.club = club;
  }

  public static fromJson = (data): Team => {
    return new Team(
      data['url'],
      data['name'],
      data['manager'],
      data['league'],
      data['club']
    );
  };
}
