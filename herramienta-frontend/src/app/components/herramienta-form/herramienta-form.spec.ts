import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientaForm } from './herramienta-form';

describe('HerramientaForm', () => {
  let component: HerramientaForm;
  let fixture: ComponentFixture<HerramientaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
