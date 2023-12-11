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
export class NewsComponent{

  constructor(private authService: AuthService) {
  }


  @Input() news: NewsModel | undefined
  comments: CommentModel[] = []

  fullView: boolean = false

  setFullView(value: boolean) {
    this.fullView = value
  }


}
