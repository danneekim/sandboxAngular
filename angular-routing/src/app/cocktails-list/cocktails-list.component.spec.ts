import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsListComponent } from './cocktails-list.component';

describe('CocktailsListComponent', () => {
  let component: CocktailsListComponent;
  let fixture: ComponentFixture<CocktailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
