export class Pitch {
  name: string;
  location: any;


  constructor(name: string, location: any) {
    this.name = name;
    this.location = location;
  }

  public static fromJson = (data) => {
    return new Pitch(
      data['name'],
      data['location']
    );
  };

}
