import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {DropdownSearchComponent} from "../../filter-options/dropdown-search/dropdown-search.component";
import {FilterCourseComponent} from "../../filter-options/filter-course/filter-course.component";
import {FilterSectionsComponent} from "../../filter-options/filter-sections/filter-sections.component";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {PostService} from "../../service/post.service";


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  constructor(private postService : PostService) {
  }

  fullView : boolean = false

  title : string = ''
  text : string = ''
  files : File[] = []

  setFullView(fullView : boolean){
    this.fullView = fullView
  }

  sendPost(){
      this.postService.createPost(this.files).subscribe((res)=>{
        console.log(res)
      })
  }

  onFileChange(event: any) {
    this.files = event.target.files;
  }

}
