import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientaList } from './herramienta-list';

describe('HerramientaList', () => {
  let component: HerramientaList;
  let fixture: ComponentFixture<HerramientaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
