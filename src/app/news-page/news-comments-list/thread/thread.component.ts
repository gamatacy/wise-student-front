import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from "../../../service/news.service";
import {CommentModel} from "../../../posts/CommentModel";
import {CommentComponent} from "../../../posts/post/comment/comment.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-thread',
  standalone: true,
  imports: [
    CommentComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './thread.component.html',
  styleUrl: './thread.component.css'
})
export class ThreadComponent implements OnInit {

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.newsService.getThread(this.threadId, 0, 10).subscribe(
      res => {
        this.comments = res
      }
    )
  }

  comments: CommentModel[] = []
  @Input() threadId: number | undefined

  fullView: boolean = false
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
    this.newsService.createThreadComment(this.threadId, this.text, this.files, this.anon)
    this.fullView = false
  }

  onFileChange(event: any) {
    this.files = event.target.files;
  }

}
