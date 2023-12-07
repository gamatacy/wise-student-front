import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  username: string = ''
  name: string = ''
  city: string = ''
  gender: string = 'MAN'
  password: string = ''

  genders: string[] = ['MAN', 'WOMAN']

  changeGender(gender: string){
    this.gender = gender
  }

  signUp() {
    this.authService.signUp(
      this.username,
      this.name,
      this.password,
      this.city,
      this.gender
    )

    setTimeout(
      ()=> {
        this.router.navigate(["/posts"])
      },
      1000
    )
  }

}
