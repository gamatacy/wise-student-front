import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PostService} from "../service/post.service";
import {SubjectService} from "../service/subject.service";

@Component({
  selector: 'app-create-subject',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './create-subject.component.html',
  styleUrl: './create-subject.component.css'
})
export class CreateSubjectComponent {

  constructor(private subjectService: SubjectService) {
  }

  fullView: boolean = false

  subject : string = 'Предмет'

  setFullView(fullView: boolean) {
    this.fullView = fullView
  }

  sendSubject() {
    this.subjectService.createSubject(this.subject).subscribe((res) =>
      console.log(res))
    this.fullView = false
  }

}
