import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsDetailsComponent } from './ingredients-details.component';

describe('IngredientsDetailsComponent', () => {
  let component: IngredientsDetailsComponent;
  let fixture: ComponentFixture<IngredientsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
