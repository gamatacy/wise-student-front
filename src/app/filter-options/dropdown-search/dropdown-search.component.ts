import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrl: './dropdown-search.component.css'
})
export class DropdownSearchComponent {

  constructor(private postService: PostService) {
  }

  placeHolder = "Предмет"

  subject: (number | string)[][] = [];

  subjects = [
    [1, "Математика"],
    [2, "Программирование"],
    [3, "Русский"]
  ]

  searchResult: (number | string)[][] = [[]];

  search() {

    this.searchResult = []

    this.subjects.forEach(subj => {
      // @ts-ignore
      if (this.placeHolder == subj[1]) {
        console.log(this.placeHolder)
        // @ts-ignore
        this.searchResult.push(subj)
      }
    })

  }

  addSubjectFilter(item: (number | string)[]) {
    // @ts-ignore
    this.postService.subjectIds = this.subject
    this.subject.push(item)
  }

  deleteSubjectFilter(item: (number | string)[]) {
    this.subject = this.subject.filter(([num, str]) => num != item[0] || str != item[1])
  }

}
