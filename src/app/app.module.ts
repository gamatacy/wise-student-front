import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./service/post.service";
import {AppComponent} from "./app.component";
import {AngularCompilation} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {DropdownSearchComponent} from "./filter-options/dropdown-search/dropdown-search.component";
import {FilterCourseComponent} from "./filter-options/filter-course/filter-course.component";
import {FilterSectionsComponent} from "./filter-options/filter-sections/filter-sections.component";
import {FilterOptionsComponent} from "./filter-options/filter-options.component";
import {CreatePostComponent} from "./posts/create-post/create-post.component";
import {PostComponent} from "./posts/post/post.component";
import {PostListComponent} from "./posts/post-list/post-list.component";
import {FormsModule} from "@angular/forms";
import {CreateSubjectComponent} from "./create-subject/create-subject.component";
import {CommentComponent} from "./posts/post/comment/comment.component";
import {CreateCommentComponent} from "./posts/post/create-comment/create-comment.component";
import {CommentsListComponent} from "./posts/post/comments-list/comments-list.component";

@NgModule({
  declarations: [
    AppComponent,
    DropdownSearchComponent,
    FilterCourseComponent,
    FilterSectionsComponent,
    FilterOptionsComponent,
    CreatePostComponent,
    PostComponent,
    PostListComponent,
  ],
  providers: [
      CommonModule,
      RouterOutlet,
      PostService,
    DropdownSearchComponent,
    FilterCourseComponent,
    FilterSectionsComponent,
    FilterOptionsComponent,
    CreatePostComponent,
    PostComponent,
    PostListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CreateSubjectComponent,
        CommentComponent,
        CreateCommentComponent,
        CommentsListComponent,
    ],
    bootstrap: [AppComponent]
  }
)
export class AppModule {
}
