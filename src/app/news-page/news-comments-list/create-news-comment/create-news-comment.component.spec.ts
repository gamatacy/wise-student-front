import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewsCommentComponent } from './create-news-comment.component';

describe('CreateNewsCommentComponent', () => {
  let component: CreateNewsCommentComponent;
  let fixture: ComponentFixture<CreateNewsCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewsCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
