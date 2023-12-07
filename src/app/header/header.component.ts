import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {timeout} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isAuth: boolean = false
  isAdmin: boolean = false

  name : string = 'Name'

  constructor(private router: Router, private authService: AuthService) {
  }

  gotoSignUp() {
    this.router.navigate(["/sign-up"])
  }

  gotoSignIn() {
    this.router.navigate(["/sign-in"])
  }

  gotoNews() {
    this.router.navigate(["/"])
  }

  gotoPosts() {
    this.router.navigate(["/posts"])
  }

  gotoUsers() {
    this.router.navigate(["/users"])
  }

  logout() {
    this.authService.logout()
    setTimeout(() => {
      this.router.navigate(["/"])
    }, 1000)
  }

  ngOnInit(): void {
    this.router.events.subscribe(z => {
      this.name = this.authService.getActiveUsername()
      // @ts-ignore
      this.authService.isAuth().then(
        res => {
          this.isAuth = true
        }
      ).catch(
        res => {
          this.isAuth = false
        }
      );

      this.authService.isAdmin().then(
        res => {
          this.isAdmin = true
        }
      ).catch(
        res => {
          if (res.response.status != 403) this.isAdmin = true
        }
      );

    })

  }

}
