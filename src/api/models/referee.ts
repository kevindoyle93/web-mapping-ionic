import {Pitch} from "./pitch";


export class Referee {
  id: number;
  name: string;
  phone: string;
  availableArea: any;
  pitches: Pitch[];
  url: string;


  constructor(id: number, name: string, phone: string, availableArea: any, pitches: Pitch[], url: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.availableArea = availableArea;
    this.pitches = pitches;
    this.url = url;
  }

  public static fromJson = (data) => {
    let pitches: Pitch[] = [];
    for (let p of data['pitches']) {
      pitches.push(Pitch.fromJson(p));
    }

    return new Referee(
      data['id'],
      data['name'],
      data['phone_number'],
      data['available_area'],
      pitches,
      data['url']
    );
  };
}
