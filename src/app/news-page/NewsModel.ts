import {UserModel} from "../auth-page/UserModel";
import {FileModel} from "../posts/FileModel";

export class NewsModel {
// Define the properties of the PostModel class
  id: number;
  year: number;
  semester: number;
  name: string;
  text: string;
  files: FileModel[];
  createdAt: string;
  user: UserModel

  // Constructor to initialize the properties
  constructor(id: number, year: number, semester: number, name: string, text: string, files: FileModel[], date: string, user: UserModel) {
    this.id = id;
    this.year = year;
    this.semester = semester;
    this.name = name;
    this.text = text;
    this.files = files;
    this.user = user
    let rawDate = this.parseRawDate(date);
    // @ts-ignore
    this.createdAt = new DatePipe('en-US').transform(rawDate, 'yyyy-MM-dd HH:mm:ss');
    console.log(this.createdAt)
  }


  private parseRawDate(rawDateString: string): Date {
    const dateArray = rawDateString.split(',').map(Number);
    // Месяцы в JavaScript начинаются с 0, поэтому вычитаем 1 из месяца
    dateArray[1] -= 1;
    // @ts-ignore
    return new Date(...dateArray);
  }

}


