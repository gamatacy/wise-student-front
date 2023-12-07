import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostService} from "../../service/post.service";
import {PostTypeModel} from "./PostTypeModel";

@Component({
  selector: 'app-filter-sections',
  templateUrl: './filter-sections.component.html',
  styleUrl: './filter-sections.component.css'
})
export class FilterSectionsComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  section: number = 0

  postTypeModel: PostTypeModel[] = []

  ngOnInit() {
    this.postService.getPostTypes().subscribe(res => {
      this.postTypeModel = res
    })
  }

  addSectionFilter(item: number | string) {
    if (typeof item == "number") {
      this.section = item
      this.postService.postTypeId = item
    }
  }

}
