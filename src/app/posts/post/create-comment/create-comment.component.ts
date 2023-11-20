import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PostService} from "../../../service/post.service";

@Component({
  selector: 'app-create-comment',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './create-comment.component.html',
  styleUrl: './create-comment.component.css'
})
export class CreateCommentComponent {

  constructor(private postService: PostService) {
  }

  fullView: boolean = false

  author: string = ''
  text: string = ''

  setFullView(fullView: boolean) {
    this.fullView = fullView
  }

  sendComment() {

    this.fullView = false
  }

}
