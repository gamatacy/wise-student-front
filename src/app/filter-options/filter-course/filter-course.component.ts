import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-filter-course',
  templateUrl: './filter-course.component.html',
  styleUrl: './filter-course.component.css'
})
export class FilterCourseComponent {

  constructor(private postService: PostService) {}

  course : number = 1;

  courses = [
    [1, '1 курс'],
    [ 2 , '2 курс'],
    [ 3 , '3 курс'],
    [ 4 , '4 курс'],
    [ 5 , '1 курс (Магистр.)'],
    [ 6 , '2 курс (Магистр.)']
  ]

  addCourseFilter(course: number | string){
    if (typeof course == "number") {
      this.course = course
      this.postService.year = course
    }
  }

}
