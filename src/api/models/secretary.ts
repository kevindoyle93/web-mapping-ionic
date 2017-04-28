export class Secretary {
  name: string;
  phone: string;


  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }

  public static fromJson = (data) => {
    return new Secretary(
      data['name'],
      data['phone_number']
    );
  };
}
