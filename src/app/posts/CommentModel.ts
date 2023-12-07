import {FileModel} from "./FileModel";
import {UserModel} from "../auth-page/UserModel";
import {DatePipe} from "@angular/common";

export class CommentModel {
  id: number
  text: string
  files: FileModel[]
  createdAt: string
  user: UserModel

  constructor(id: number, text: string, files: FileModel[], date: string, user: UserModel) {
    this.id = id
    this.text = text
    this.files = files
    this.user = user
    let rawDate = this.parseRawDate(date);
    // @ts-ignore
    this.createdAt = new DatePipe('en-US').transform(rawDate, 'yyyy-MM-dd HH:mm:ss');

  }

  private parseRawDate(rawDateString: string): Date {
    const dateArray = rawDateString.split(',').map(Number);
    // Месяцы в JavaScript начинаются с 0, поэтому вычитаем 1 из месяца
    dateArray[1] -= 1;
    // @ts-ignore
    return new Date(...dateArray);
  }


}
