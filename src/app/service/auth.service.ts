import {Injectable} from '@angular/core';
import axios from 'axios';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../auth-page/UserModel";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // @ts-ignore
  private user: UserModel

  getActiveUsername(): string {
    // @ts-ignore
    return localStorage.getItem("username")
  }

  constructor(private http: HttpClient) {
  }

  async isAuth() {
    return await axios.get("http://localhost:8080/wise-students/posts", {
      withCredentials: true
    });
  }

  async isAdmin() {
    return await axios.post("http://localhost:8080/wise-students/admin/user/ban", {}, {
      withCredentials: true
    });
  }

  signUp(username: string, name: string, password: string, city: string, gender: string) {
    this.http.post<UserModel>("http://localhost:8080/wise-students/auth/registration", {
      username: username,
      name: name,
      password: password,
      city: city,
      sex: gender
    }, {
      withCredentials: true
    }).subscribe(res => {
      this.user = res
      localStorage.setItem("username", this.user.name)
    })
  }

  signIn(username: string, password: string) {
    this.http.post<UserModel>("http://localhost:8080/wise-students/auth/login", {
      username: username,
      password: password
    }, {
      withCredentials: true
    }).subscribe(res => {
      this.user = res
      localStorage.setItem("username", this.user.name)
    })
  }

  logout() {
    this.http.get("http://localhost:8080/wise-students/auth/logout", {
      withCredentials: true
    }).subscribe( res => {
      console.log("logout")
    })
  }

}
