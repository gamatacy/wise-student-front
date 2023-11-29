import {Component} from '@angular/core';
import {SubjectService} from "../../service/subject.service";
import {tap} from "rxjs";
import {PostService} from "../../service/post.service";

@Component({
    selector: 'app-dropdown-search',
    templateUrl: './dropdown-search.component.html',
    styleUrl: './dropdown-search.component.css'
})
export class DropdownSearchComponent {

    constructor(private postService : PostService,private subjectService: SubjectService) {
    }

    placeHolder = "Предмет"

    subject: [number, string][][] = [];

    searchResult: [number, string][][] = [];

    search() {

        this.searchResult = []

        this.subjectService.getSubjects().subscribe(res => {
            res.forEach(
                r => {
                    // @ts-ignore
                    this.searchResult.push([r[0], r[1]])
                }
            )
        })


        // this.subjects.forEach(subj => {
        //     // @ts-ignore
        //     if (this.placeHolder == subj[1]) {
        //         console.log(this.placeHolder)
        //         // @ts-ignore
        //         this.searchResult.push(subj)
        //     }
        // })

    }

    addSubjectFilter(item: [number, string][]) {
        this.subject.push(item)
        this.postService.subjects = this.subject

    }

    deleteSubjectFilter(item: [number, string][]) {
        this.subject = this.subject.filter(([num, str]) => num != item[0] || str != item[1])
        this.postService.subjects = this.subject
    }

}
