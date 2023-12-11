import {Injectable} from '@angular/core';
import {PostModel} from "../posts/PostModel";
import {NewsModel} from "../news-page/NewsModel";
import {HttpClient} from "@angular/common/http";
import {CommentModel} from "../posts/CommentModel";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'http://localhost:8080/wise-students/news';


  constructor(private http: HttpClient) {
  }

  getNews(page: number, size: number) {

    return this.http.get<NewsModel[]>(this.url +
      `?page_number=${page}
    &page_size=${size}`, {
      withCredentials: true
    })

  }

  getNewsComments(newsId: number, page: number, size: number) {
    return this.http.get<CommentModel[]>(`http://localhost:8080/wise-students/news/threads?newsId=${newsId}&page_number=${page}&page_size=${size}`, {
      withCredentials: true
    })
  }

  getThread(threadId: number, page: number, size: number) {
    return this.http.get<CommentModel[]>(`http://localhost:8080/wise-students/news/threads/comments?threadId=${threadId}&page_number=${page}&page_size=${size}`, {
      withCredentials: true
    })
  }

  createComment(newsId: number, text: string, files: File[], anon: string) {

    const formData = new FormData();

    formData.append('newsId', String(newsId));
    formData.append('text', text);
    formData.append('is_anonymous', anon);

    for (const file of files) {
      formData.append('files', file, file.name);
    }

    return this.http.post('http://localhost:8080/wise-students/news/thread', formData, {
      withCredentials: true
    }).subscribe()
  }

  createThreadComment(newsId: number, text: string, files: File[], anon: string) {

    const formData = new FormData();

    formData.append('threadId', String(newsId));
    formData.append('text', text);
    formData.append('is_anonymous', anon);

    for (const file of files) {
      formData.append('files', file, file.name);
    }

    return this.http.post('http://localhost:8080/wise-students/news/thread/comment', formData, {
      withCredentials: true
    }).subscribe()
  }

}
