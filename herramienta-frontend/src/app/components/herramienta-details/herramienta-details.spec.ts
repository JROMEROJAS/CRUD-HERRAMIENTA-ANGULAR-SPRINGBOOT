import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientaDetailsComponent } from './herramienta-details';

describe('HerramientaDetails', () => {
  let component: HerramientaDetailsComponent;
  let fixture: ComponentFixture<HerramientaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientaDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
