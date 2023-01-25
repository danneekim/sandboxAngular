import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsDetailsComponent } from './cocktails-details.component';

describe('CocktailsDetailsComponent', () => {
  let component: CocktailsDetailsComponent;
  let fixture: ComponentFixture<CocktailsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
