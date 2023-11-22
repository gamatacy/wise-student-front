import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostModel} from "../PostModel";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {


  @Input() post : PostModel | undefined

  fullView: boolean = false

  setFullView(value: boolean) {
    this.fullView = value
  }

}
