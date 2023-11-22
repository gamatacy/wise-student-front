import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostModel} from "../posts/PostModel";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:8080/wise-students/posts';


  constructor(private http: HttpClient) {
  }

  subjects: [number, string][][] = []
  year: number = 1
  postTypeId: number = 1
  pageNumber: number = 0
  pageSize: number = 4

  posts: PostModel[] = []

  postsSearchResult = []

  createPost(title: string, text: string, files: File[]) {

    const formData = new FormData();

    formData.append('name', title);
    formData.append('text', text);
    formData.append('subjectId', String(this.subjects[0][0]));
    formData.append('year', String(this.year));
    formData.append('semester', '1');
    formData.append('postTypeId', String(this.postTypeId));

    for (const file of files) {
      formData.append('files', file, file.name);
    }

    return this.http.post(this.url, formData);

  }

  getPosts() {

    return this.http.get<PostModel[]>(this.url +
      `?year=${this.year}
    &subjectId=${this.subjects[0][0]}
    &postTypeId=${this.postTypeId}
    &page_number=${this.pageNumber}
    &page_size=${this.pageSize}`,
    ).subscribe(res => {

      if (res.length == 0) {
        this.posts = []
      } else {
        this.posts = res
      }

    })

  }

  // getComments(postId : number){
  //   return this.http.get('http://localhost:8080/wise-students/post/comments' +
  //     `?year=${this.year}
  //   &subjectId=${this.subjects[0][0]}
  //   &postTypeId=${this.postTypeId}
  //   &page_number=${this.pageNumber}
  //   &page_size=${this.pageSize}`,
  // }

}
