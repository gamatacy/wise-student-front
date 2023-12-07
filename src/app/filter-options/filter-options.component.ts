import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PostService} from "../service/post.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {AdminGuardService} from "../service/admin-guard.service";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrl: './filter-options.component.css'
})
export class FilterOptionsComponent implements OnInit {

  constructor(private postService: PostService, private authService: AuthService, private router: Router) {
  }


  isAdmin: boolean = false

  send() {
    this.postService.getPosts()
  }

  ngOnInit(): void {
    this.router.events.subscribe(z => {
      // @ts-ignore
      this.authService.isAdmin().then(
        res => {
          this.isAdmin = true
        }
      ).catch(
        res => {
          if (res.response.status != 403) this.isAdmin = true
        }
      );
    })
  }

}
