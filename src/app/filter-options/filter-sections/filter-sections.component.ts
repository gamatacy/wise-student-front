import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-filter-sections',
  templateUrl: './filter-sections.component.html',
  styleUrl: './filter-sections.component.css'
})
export class FilterSectionsComponent {

  constructor(private postService: PostService) {}

  section: number = 0

  sections = [[1, 'Контрольные'], [2, 'Конспекты семинаров'], [3, 'Литература']]

  addSectionFilter(item: number | string) {
    if (typeof item == "number") {
      this.section = item
      this.postService.sectionId = item
    }
  }

}
