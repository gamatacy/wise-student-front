import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentModel} from "../../CommentModel";
import {AuthService} from "../../../service/auth.service";
import {PostService} from "../../../service/post.service";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {

  constructor(private authService: AuthService, private postService: PostService) {
  }

  @Input() comment: CommentModel | undefined
  isAdmin: boolean = false

  ngOnInit(): void {


    this.authService.isAdmin().then(
      res => {
        this.isAdmin = true
      }
    ).catch(
      res => {
        if (res.response.status != 403) this.isAdmin = true
      }
    );

  }

  deleteComment() {
    // @ts-ignore
    this.postService.deleteComment(this.comment?.id).subscribe()
  }


}
