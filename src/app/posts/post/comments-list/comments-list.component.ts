import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentComponent} from "../comment/comment.component";
import {CreateCommentComponent} from "../create-comment/create-comment.component";
import {CommentModel} from "../../CommentModel";
import {PostService} from "../../../service/post.service";

@Component({
  selector: 'app-comments-list',
  standalone: true,
    imports: [CommonModule, CommentComponent, CreateCommentComponent],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {

  constructor(private postService: PostService) {
  }

  @Input() postId : number | undefined
  comments : CommentModel[] = []
  page = 0

  getComments() {
    // @ts-ignore
    this.postService.getComments(this.postId, this.page, 5).subscribe(res => {
      console.log("COMMENTS")
      console.log(res)
      // @ts-ignore
      this.comments = res.content
    })

  }

  prevPage(){
    if (this.page != 0) --this.page
    this.getComments()
  }
  nextPage(){
    ++this.page
    this.getComments()
  }

}
