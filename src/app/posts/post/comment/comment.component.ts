import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentModel} from "../../CommentModel";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  @Input() comment : CommentModel | undefined

}
