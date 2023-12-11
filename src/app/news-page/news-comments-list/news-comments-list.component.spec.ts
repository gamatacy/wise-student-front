import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCommentsListComponent } from './news-comments-list.component';

describe('NewsCommentsListComponent', () => {
  let component: NewsCommentsListComponent;
  let fixture: ComponentFixture<NewsCommentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCommentsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsCommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
