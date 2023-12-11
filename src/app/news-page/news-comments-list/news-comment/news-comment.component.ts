import {Component, Input} from '@angular/core';
import {CommentModel} from "../../../posts/CommentModel";
import {ThreadComponent} from "../thread/thread.component";
import {CommentComponent} from "../../../posts/post/comment/comment.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-news-comment',
  standalone: true,
  imports: [
    ThreadComponent,
    CommentComponent,
    NgIf
  ],
  templateUrl: './news-comment.component.html',
  styleUrl: './news-comment.component.css'
})
export class NewsCommentComponent {

  @Input() comment : CommentModel | undefined
  threadVisible : boolean = false

}
