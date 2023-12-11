import {Component, Input, OnInit} from '@angular/core';
import {CommentComponent} from "../../posts/post/comment/comment.component";
import {CreateCommentComponent} from "../../posts/post/create-comment/create-comment.component";
import {NgForOf} from "@angular/common";
import {NewsService} from "../../service/news.service";
import {CommentModel} from "../../posts/CommentModel";
import {CreateNewsCommentComponent} from "./create-news-comment/create-news-comment.component";

@Component({
  selector: 'app-news-comments-list',
  standalone: true,
  imports: [
    CommentComponent,
    CreateCommentComponent,
    NgForOf,
    CreateNewsCommentComponent
  ],
  templateUrl: './news-comments-list.component.html',
  styleUrl: './news-comments-list.component.css'
})
export class NewsCommentsListComponent implements OnInit {

  constructor(private newsService: NewsService) {
  }

  comments: CommentModel[] = []
  @Input() newsId: number | undefined
  pageNumber = 0
  pageSize = 5

  ngOnInit(): void {
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
