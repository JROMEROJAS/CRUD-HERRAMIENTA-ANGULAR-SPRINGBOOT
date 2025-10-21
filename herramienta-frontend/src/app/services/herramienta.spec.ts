import { TestBed } from '@angular/core/testing';
import { HerramientaService } from './herramienta';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Herramienta', () => {
  let service: HerramientaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HerramientaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
