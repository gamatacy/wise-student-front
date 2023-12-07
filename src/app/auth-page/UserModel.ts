export class UserModel {
  username: string;
  name: string;
  password: string;
  city: string;
  gender: string;

  constructor(username: string, name: string, password: string, city: string, gender: string) {
    this.username = username
    this.name = name
    this.password = password
    this.city = city
    this.gender = gender
  }

}
