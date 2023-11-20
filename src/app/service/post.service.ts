import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  subjectIds: number[] = [1]
  courseId: number = 1
  sectionId: number = 1

  createPost(title : string, text : string, files : File[]) {

    const formData = new FormData();

    for (const file of files) {
      formData.append('files', file, file.name);
    }

    formData.append('title', title);
    formData.append('text', text);
    formData.append('subject_ids', String(this.subjectIds[0]));
    formData.append('course_id', String(this.courseId));
    formData.append('section_id', String(this.sectionId));

    return this.http.post(
      "http://localhost:29501/wise-students/posts", formData
    )

  }



}
