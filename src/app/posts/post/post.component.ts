import {Component, Input} from '@angular/core';
import {PostModel} from "../PostModel";
import {PostService} from "../../service/post.service";
import {CommentModel} from "../CommentModel";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  constructor(private postService: PostService) {
  }

  @Input() post: PostModel | undefined
  comments: CommentModel[] = []

  fullView: boolean = false

  setFullView(value: boolean) {
    this.fullView = value
  }

}
