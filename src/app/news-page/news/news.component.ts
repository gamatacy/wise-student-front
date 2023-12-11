import {Component, Input, OnInit} from '@angular/core';
import {CommentsListComponent} from "../../posts/post/comments-list/comments-list.component";
import {NgForOf, NgIf, SlicePipe} from "@angular/common";
import {NewsModel} from "../NewsModel";
import {CommentModel} from "../../posts/CommentModel";
import {AuthService} from "../../service/auth.service";
import {NewsCommentsListComponent} from "../news-comments-list/news-comments-list.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommentsListComponent,
    NgForOf,
    NgIf,
    SlicePipe,
    NewsCommentsListComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  canComment: boolean = false

  ngOnInit(): void {
    this.authService.isAuth().then(
      res => {
        this.canComment = true
      }
    ).catch(
      res => {
        if (res.response.status != 403) this.canComment = true
      }
    );
  }

  @Input() news: NewsModel | undefined
  comments: CommentModel[] = []

  fullView: boolean = false

  setFullView(value: boolean) {
    this.fullView = value
  }


}
