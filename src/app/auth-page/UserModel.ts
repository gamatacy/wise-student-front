export class UserModel {
  id: number
  username: string;
  name: string;
  password: string;
  city: string;
  gender: string;

  constructor(id:number, username: string, name: string, password: string, city: string, gender: string) {
    this.id = id
    this.username = username
    this.name = name
    this.password = password
    this.city = city
    this.gender = gender
  }

}
