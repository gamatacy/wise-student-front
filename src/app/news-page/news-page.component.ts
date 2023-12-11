import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsListComponent} from "./news-list/news-list.component";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, NewsListComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isAdmin().then(
      res => {
        this.canCreate = true
      }
    ).catch(
      res => {
        if (res.response.status != 403) this.canCreate = true
      }
    );

  }

  canCreate: boolean = false

}
