import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../auth-page/UserModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(page: number) {
    return this.http.get(`http://localhost:8080/wise-students/user?page=${page}`);
  }

  banUser(username: string, date: string) {
    return this.http.post("http://localhost:8080/wise-students/admin/user/ban", {
      username: username,
      date: date
    }, {withCredentials: true})
  }

}
