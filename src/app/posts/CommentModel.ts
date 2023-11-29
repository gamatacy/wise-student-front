import {FileModel} from "./FileModel";

export class CommentModel {
  id: number
  text: string
  files: FileModel[]

  constructor(id: number, text: string, files: FileModel[]) {
    this.id = id
    this.text = text
    this.files = files
  }

}
