import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentComponent} from "../comment/comment.component";
import {CreateCommentComponent} from "../create-comment/create-comment.component";
import {CommentModel} from "../../CommentModel";
import {PostService} from "../../../service/post.service";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [CommonModule, CommentComponent, CreateCommentComponent],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getComments()
  }

  @Input() postId: number | undefined
  comments: CommentModel[] = []

  totalPages: number = 0
  totalSize: number = 0
  pageSize: number = 0

  page = 0

  getComments() {
    // @ts-ignore
    this.postService.getComments(this.postId, this.page, 5).subscribe(res => {
      // @ts-ignore
      this.comments = res.content
      // @ts-ignore
      this.totalPages = res.total_pages
      // @ts-ignore
      this.totalSize = res.total_size
      // @ts-ignore
      this.pageSize = res.page_size
    })

  }

  prevPage() {
    if (this.page != 0) --this.page
    this.getComments()
  }

  nextPage() {
    if (this.page + 1 < this.totalPages) {
      ++this.page
      this.getComments()
    }
  }


}
