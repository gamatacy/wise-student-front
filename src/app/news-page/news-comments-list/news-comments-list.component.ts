import {Component, Input, OnInit} from '@angular/core';
import {CommentComponent} from "../../posts/post/comment/comment.component";
import {CreateCommentComponent} from "../../posts/post/create-comment/create-comment.component";
import {NgForOf, NgIf} from "@angular/common";
import {NewsService} from "../../service/news.service";
import {CommentModel} from "../../posts/CommentModel";
import {CreateNewsCommentComponent} from "./create-news-comment/create-news-comment.component";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {ThreadComponent} from "./thread/thread.component";
import {NewsCommentComponent} from "./news-comment/news-comment.component";

@Component({
  selector: 'app-news-comments-list',
  standalone: true,
  imports: [
    CommentComponent,
    CreateCommentComponent,
    NgForOf,
    CreateNewsCommentComponent,
    NgIf,
    ThreadComponent,
    NewsCommentComponent
  ],
  templateUrl: './news-comments-list.component.html',
  styleUrl: './news-comments-list.component.css'
})
export class NewsCommentsListComponent implements OnInit {

  constructor(private newsService: NewsService, private authService: AuthService, private router: Router) {
  }

  canComment: boolean = false

  comments: CommentModel[] = []
  @Input() newsId: number | undefined
  pageNumber = 0
  pageSize = 5

  ngOnInit(): void {
    // this.router.events.subscribe(z => {
    this.authService.isAuth().then(
      res => {
        this.canComment = true
      }
    ).catch(
      res => {
        if (res.response.status != 403) this.canComment = true
      }
    )
    console.log(this.canComment)
    // }
    // )
    this.getComments()
  }


  getComments() {
    // @ts-ignore
    this.newsService.getNewsComments(this.newsId, this.pageNumber, this.pageSize).subscribe(
      res => {
        this.comments = res
      }
    )

  }


  prevPage() {
    if (this.pageNumber != 0) --this.pageNumber
    this.getComments()
  }

  nextPage() {
    ++this.pageNumber
    this.getComments()
  }

}
