import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
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

  @Input() postId: number | undefined
  author: string = ''
  text: string = ''
  files: File[] = []

  setFullView(fullView: boolean) {
    this.fullView = fullView
  }

  sendComment() {
    // @ts-ignore
    this.postService.createComment(this.postId, this.text, this.files)
    this.fullView = false
  }

  onFileChange(event: any) {
    this.files = event.target.files;
  }

}
