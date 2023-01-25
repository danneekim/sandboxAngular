import { TestBed } from '@angular/core/testing';

import { CocktailDetailsResolver } from './cocktail-details.resolver';

describe('CocktailDetailsResolver', () => {
  let resolver: CocktailDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CocktailDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
