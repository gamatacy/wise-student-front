import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
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
import {routes} from "./app.routes";
import {AuthGuardService} from "./service/auth-guard.service";
import {MainPageComponent} from "./main-page/main-page.component";
import {AdminGuardService} from "./service/admin-guard.service";
import {HeaderComponent} from "./header/header.component";

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
      MainPageComponent
    ],
    providers: [
      //   CommonModule,
      //   RouterOutlet,
      //   PostService,
      // DropdownSearchComponent,
      // FilterCourseComponent,
      // FilterSectionsComponent,
      // FilterOptionsComponent,
      // CreatePostComponent,
      // PostComponent,
      // PostListComponent
      AuthGuardService,
      AdminGuardService
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        CreateSubjectComponent,
        CommentComponent,
        CreateCommentComponent,
        CommentsListComponent,
        HeaderComponent
    ],
    exports: [
      FilterOptionsComponent,
      PostListComponent
    ],
    bootstrap: [AppComponent]
  }
)
export class AppModule {
}
