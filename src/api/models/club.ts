export class Club {
  id: number;
  name: string;
  homeColours: string;
  awayColours: string;
  secretary: string;
  clubhouseLocation: any;
  url: string;


  constructor(id: number, name: string, homeColours: string, awayColours: string, secretary: string, clubhouseLocation: any, url: string) {
    this.id = id;
    this.name = name;
    this.homeColours = homeColours;
    this.awayColours = awayColours;
    this.secretary = secretary;
    this.clubhouseLocation = clubhouseLocation;
    this.url = url;
  }

  public static fromJson = (data) => {
    return new Club(
      data['id'],
      data['name'],
      data['home_colours'],
      data['away_colours'],
      data['secretary'],
      data['clubhouse_location']['coordinates'],
      data['url']
    );
  };
}
