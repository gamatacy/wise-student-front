import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSectionsComponent } from './filter-sections.component';

describe('FilterSectionsComponent', () => {
  let component: FilterSectionsComponent;
  let fixture: ComponentFixture<FilterSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
