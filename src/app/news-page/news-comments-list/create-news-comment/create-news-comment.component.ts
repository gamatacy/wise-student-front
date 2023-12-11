import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {NewsService} from "../../../service/news.service";

@Component({
  selector: 'app-create-news-comment',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './create-news-comment.component.html',
  styleUrl: './create-news-comment.component.css'
})
export class CreateNewsCommentComponent {

  constructor(private newsService: NewsService) {
  }

  fullView: boolean = false

  @Input() newsId: number | undefined
  text: string = ''
  anon: string = ''
  files: File[] = []
  anons: string[] = ['no', 'yes']

  setFullView(fullView: boolean) {
    this.fullView = fullView
  }

  changeAnon(anon: string) {
    this.anon = anon
  }

  sendComment() {
    // @ts-ignore
    this.newsService.createComment(this.newsId, this.text, this.files, this.anon)
    this.fullView = false
  }

  onFileChange(event: any) {
    this.files = event.target.files;
  }

}
