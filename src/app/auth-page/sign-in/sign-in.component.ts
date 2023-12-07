import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  username: string = ''
  password: string = ''

  signIn() {
    this.authService.signIn(
      this.username,
      this.password
    )

    setTimeout(
      () => {
        this.router.navigate(["/posts"])
      },
      1000
    )
  }

}
