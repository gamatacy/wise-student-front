import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentComponent} from "../posts/post/comment/comment.component";
import {CreateCommentComponent} from "../posts/post/create-comment/create-comment.component";
import {CommentModel} from "../posts/CommentModel";
import {UserService} from "../service/user.service";
import {UserModel} from "../auth-page/UserModel";
import {CommentsListComponent} from "../posts/post/comments-list/comments-list.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, CommentComponent, CreateCommentComponent, CommentsListComponent, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  users: UserModel[] = []
  fullView: boolean = false
  username: string = ''
  banDate: string = ''


  page = 0

  getUsers() {
    // @ts-ignore
    this.userService.getUsers(this.page, 5).subscribe(res => {
      // @ts-ignore
      this.users = res.content
    })

  }

  ban(){
    this.userService.banUser(this.username,this.banDate).subscribe()
  }

  setFullView(value: boolean, username: string) {
    this.username = username
    this.fullView = value
  }

  prevPage() {
    if (this.page != 0) --this.page
    this.getUsers()
  }

  nextPage() {
    ++this.page
    this.getUsers()
  }


}
