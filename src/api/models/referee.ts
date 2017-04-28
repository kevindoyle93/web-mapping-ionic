export class Referee {
  id: number;
  name: string;
  phone: string;
  availableArea: any;
  url: string;


  constructor(id: number, name: string, phone: string, availableArea: any, url: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.availableArea = availableArea;
    this.url = url;
  }

  public static fromJson = (data) => {
    return new Referee(
      data['id'],
      data['name'],
      data['phone_number'],
      data['available_area'],
      data['url']
    );
  };
}
