import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownSearchComponent} from "./dropdown-search/dropdown-search.component";
import {FilterSectionsComponent} from "./filter-sections/filter-sections.component";
import {FilterCourseComponent} from "./filter-course/filter-course.component";
import {PostService} from "../service/post.service";
import {CreatePostComponent} from "../posts/create-post/create-post.component";

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrl: './filter-options.component.css'
})
export class FilterOptionsComponent {

  constructor(private postService: PostService) {
  }

  send(){
    console.log(this.postService.subjectIds)
    console.log(this.postService.courseId)
    console.log(this.postService.sectionId)
  }

}
