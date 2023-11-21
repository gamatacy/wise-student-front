import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "../post/post.component";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  posts : any = []



}
