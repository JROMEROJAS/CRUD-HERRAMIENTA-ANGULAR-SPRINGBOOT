import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientaDetails } from './herramienta-details';

describe('HerramientaDetails', () => {
  let component: HerramientaDetails;
  let fixture: ComponentFixture<HerramientaDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientaDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientaDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
