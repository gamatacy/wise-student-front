import {Component} from '@angular/core';
import {PostService} from "../service/post.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
    selector: 'app-filter-options',
    templateUrl: './filter-options.component.html',
    styleUrl: './filter-options.component.css'
})
export class FilterOptionsComponent {

    constructor(private postService: PostService) {
    }

    send() {
        this.postService.getPosts()
    }

}
