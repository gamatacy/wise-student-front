import {FileModel} from "./FileModel";

export class PostModel {
  // Define the properties of the PostModel class
  id: number;
  year: number;
  semester: number;
  name: string;
  text: string;
  files: FileModel[];

  // Constructor to initialize the properties
  constructor(id: number, year: number, semester: number, name: string, text: string, files: FileModel[]) {
    this.id = id;
    this.year = year;
    this.semester = semester;
    this.name = name;
    this.text = text;
    this.files = files;
  }

}

