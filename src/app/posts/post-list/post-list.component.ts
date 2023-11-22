import {Component} from '@angular/core';
import {PostModel} from "../PostModel";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  posts: PostModel[] = []

  constructor(private postService: PostService) {
  }

  ngDoCheck() {
    this.posts = this.postService.posts
    console.log(this.posts)
  }

}
