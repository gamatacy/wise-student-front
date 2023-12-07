import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpComponent} from "./sign-up/sign-up.component";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, SignUpComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

}
