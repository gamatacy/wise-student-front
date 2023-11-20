import {Component} from '@angular/core';
import {PostService} from "../../service/post.service";


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  constructor(private postService: PostService) {
  }

  fullView: boolean = false

  title: string = ''
  text: string = ''
  files: File[] = []

  setFullView(fullView: boolean) {
    this.fullView = fullView
  }

  sendPost() {
    this.postService.createPost(this.title, this.text, this.files).subscribe((res) => {
      console.log(res)
    })
    this.fullView = false
  }

  onFileChange(event: any) {
    this.files = event.target.files;
  }

}
