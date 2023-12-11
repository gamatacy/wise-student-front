import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCommentComponent } from './news-comment.component';

describe('NewsCommentComponent', () => {
  let component: NewsCommentComponent;
  let fixture: ComponentFixture<NewsCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
