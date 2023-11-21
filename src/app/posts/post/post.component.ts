import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {


  @Input() title: string = ""
  @Input() text: string = ""

  fullView: boolean = false

  setFullView(value: boolean) {
    this.fullView = value
  }

}
