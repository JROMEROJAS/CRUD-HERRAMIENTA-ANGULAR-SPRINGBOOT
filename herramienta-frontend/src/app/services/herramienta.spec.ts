import { TestBed } from '@angular/core/testing';

import { Herramienta } from './herramienta';

describe('Herramienta', () => {
  let service: Herramienta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Herramienta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
