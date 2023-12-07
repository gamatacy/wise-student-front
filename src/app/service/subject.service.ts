import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  url = 'http://localhost:8080/wise-students/subjects';

  constructor(private http: HttpClient) {
  }

  createSubject(subject: string) {
    return this.http.post("http://localhost:8080/wise-students/subjects",
      {
        name: subject
      }, {
        withCredentials: true
      })
  }

  getSubjects(): Observable<[number, string][]> {
    return this.http.get<any[]>(this.url, {
      withCredentials: true
    }).pipe(
      map((data: any[]) => {
        return data.map(item => [item.id, item.name] as [number, string]);
      })
    );
  }

}
