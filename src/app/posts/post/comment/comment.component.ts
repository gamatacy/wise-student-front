import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  author : string = "Maxim Deryugin"
  text : string = "Очень хороший сайт, отличная работа, очень хороший сайт, отличная работа, очень хороший сайт, отличная работа, очень хороший сайт, отличная работа, очень хороший сайт, отличная работа, очень хороший сайт, отличная работа, очень хороший сайт, отличная работа, очень хороший сайт, отличная работа, очень хороший сайт, отличная работа, очень хороший сайт, отличная работа, очень хороший сайт, отличная работаы"

}
