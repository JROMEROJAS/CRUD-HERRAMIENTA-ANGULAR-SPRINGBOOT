import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientaFormComponent } from './herramienta-form';

describe('HerramientaForm', () => {
  let component: HerramientaFormComponent;
  let fixture: ComponentFixture<HerramientaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
