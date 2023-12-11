import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsModel} from "../NewsModel";
import {NewsComponent} from "../news/news.component";
import {NewsService} from "../../service/news.service";

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, NewsComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit {

  constructor(private newsService: NewsService) {
  }

  news: NewsModel[] = []
  pageNumber = 0
  pageSize = 0

  ngOnInit(): void {
    this.getNews()
  }


  getNews() {
    this.newsService.getNews(this.pageNumber, this.pageSize).subscribe(
      res => {
        this.news = res
      }
    )

  }


  prevPage() {
    if (this.pageNumber != 0) --this.pageNumber
    this.getNews()
  }

  nextPage() {
    ++this.pageNumber
    this.getNews()
  }

}
